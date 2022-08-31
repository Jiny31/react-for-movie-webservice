import {useState, useEffect} from "react";
import Movie from "../components/Movie.js";
import styles from "./Home.module.css";

function Home(){
    const [loading, setloading] = useState(true);
    const [movies, setmovies] = useState([]);
  
    const getMovies = async () =>{
      const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();
      setmovies(json.data.movies);
      setloading(false);
    }
    useEffect( ()=>{
      getMovies();
    }, []);
  
    return (
      <div className={styles.container}>
        {loading ? <h1>Loading ...</h1> :  null}
        <div className={styles.movies}>
          {movies.map( movies =>
            <Movie
              key={movies.id}
              id={movies.id}
              title={movies.title}
              medium_cover_image={movies.medium_cover_image}
              summary={movies.summary}
              genres={movies.genres} />
          )}
        </div>
      </div>
    );
}

export default Home;
import PropTypes from "prop-types";
import styles from "./Movie.module.css";

import {
    Link,
  } from "react-router-dom";
function Movie({id, title, medium_cover_image, summary, genres}){
    return (
      <div className={styles.movie}>
        <img src={medium_cover_image} alt={title} className={styles.movie__img}/>
        <h2 className={styles.movie__title}>
          <Link to={"/movie/"+id}><h2>{title}</h2></Link>
        </h2>
        <strong >
          {genres.map(g => <p className={styles.movie__tag} key={g}> #{g}</p> )}
        </strong>
        <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary }</p>
        
      </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
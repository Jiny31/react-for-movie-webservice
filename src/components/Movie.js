import PropTypes from "prop-types";
import {
    Link,
  } from "react-router-dom";
function Movie({id, title, medium_cover_image, summary, genres}){
    return (
        <div >
        <Link to={"/movie/"+id}><h2>{title}</h2></Link>
        <img src={medium_cover_image} alt={title}/>
        <p>{summary}</p>
        <p>{genres.map(g => <strong key={g}>#{g} </strong>)}</p>
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
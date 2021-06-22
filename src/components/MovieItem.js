import { MovieWrapper } from "../styles";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  return (
    <MovieWrapper>
      <Link to={`/movies/${props.movie.slug}`}>
        <img alt={props.movie.title} src={props.movie.poster} />
      </Link>
      <p> {props.movie.title}</p>
      <p> {props.movie.genre}</p>
    </MovieWrapper>
  );
};

export default MovieItem;

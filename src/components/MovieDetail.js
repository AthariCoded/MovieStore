import { DetailWrapper } from "../styles";
import { useParams, Redirect } from "react-router-dom";

const MovieDetail = (props) => {
  const movieSlug = useParams().movieSlug;
  const movie = props.movies.find((movie) => movie.slug === movieSlug);

  if (!movie) return <Redirect to="/movies" />;

  return (
    <DetailWrapper>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>Released: {movie.released}</p>
      <p>Run Time: {movie.runtime} </p>
      <p>Genre: {movie.genre}</p>
      <p>Plot: {movie.plot} </p>
    </DetailWrapper>
  );
};

export default MovieDetail;

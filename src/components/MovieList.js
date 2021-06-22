import movies from "../movies";
import MovieItem from "./MovieItem";
import { ListWrapper } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";

const MovieList = (props) => {
  const [query, setQuery] = useState("");

  const filterMovies = props.movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLocaleLowerCase())
  );

  const movieList = filterMovies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} setMovie={props.setMovie} />
  ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{movieList}</ListWrapper>;
    </div>
  );
};

export default MovieList;

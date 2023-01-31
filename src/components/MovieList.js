import React from "react";
import { useSelector } from "react-redux";
import MovieListItem from "./MovieListItem";
import MovieFooter from "./MovieFooter";

const MovieList = () => {
  const filmler = useSelector((store) => store.movieReducer.movies);
  const movies = [...filmler];

  console.log(filmler);
  return (
    <div className="col">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>{filmler.title}</th>
            <th>{filmler.director}</th>
            <th>{filmler.genre}</th>
            <th>{filmler.metascore}</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie) => (
            <MovieListItem key={movie.id} movie={movie} />
          ))}
        </tbody>
      </table>

      <MovieFooter totalMovies={movies.length} />
    </div>
  );
};

export default MovieList;

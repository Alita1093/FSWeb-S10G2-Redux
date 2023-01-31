import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeFavorite } from "../actions/favoritesActions";
import { useDispatch } from "react-redux";
const FavoriteMovieList = (props) => {
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favouritesReducer.favList);

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span
                  onClick={() => dispatch(removeFavorite(movie.id))}
                  class="material-icons"
                >
                  remove_circle
                </span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FavoriteMovieList;

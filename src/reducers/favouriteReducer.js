import {
  ADD_FAVORITE,
  TOGGLE_FAVORITES,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";
import movies from "../data";

const initialState = {
  favList: [],
  displayFavorites: "true",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      const favoriteMovie = {
        id: action.payload.id,
        title: action.payload.title,
      };
      return { ...state, favList: [...state.favList, favoriteMovie] };
    }
    case TOGGLE_FAVORITES: {
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    }
    case REMOVE_FAVORITE: {
      return {
        ...state,
        favList: state.favList.filter((movie) => movie.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default reducer;

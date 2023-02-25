import { DELETE_FROM_FAVOURITES, SET_AS_FAVOURITE } from "../actions";

const initialState = {
  favouriteSongs: [],
};

const myLibraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AS_FAVOURITE:
      return {
        ...state,
        favouriteSongs: [...state.favouriteSongs, action.payload],
      };

    case DELETE_FROM_FAVOURITES:
      return {
        ...state,
        favouriteSongs: [...state.favouriteSongs.filter((_, i) => i !== action.payload)],
      };
    default:
      return state;
  }
};
export default myLibraryReducer;

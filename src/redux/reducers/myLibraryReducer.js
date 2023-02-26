import { DELETE_FROM_FAVOURITES, SET_AS_FAVOURITE } from "../actions";

const initialState = {
  favouriteSongs: [],
  favouritesId: [],
};

const myLibraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AS_FAVOURITE:
      return {
        ...state,
        favouriteSongs: [...state.favouriteSongs, action.payload],
        favouritesId: [...state.favouritesId, action.payload.id],
      };

    case DELETE_FROM_FAVOURITES:
      return {
        ...state,
        favouriteSongs: [...state.favouriteSongs.filter((_, i) => i !== action.payload)],
        favouritesId: [...state.favouritesId.filter((_, i) => i !== action.payload)],
      };
    default:
      return state;
  }
};
export default myLibraryReducer;

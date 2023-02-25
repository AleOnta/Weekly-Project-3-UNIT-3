import {
  ERROR_ENCOUNTER_ALBUM,
  SET_ALBUM_FOCUS,
  SET_ALBUM_SONGS,
  SET_LOAD_OFF_ALBUM,
  SET_LOAD_ON_ALBUM,
} from "../actions";

const initialState = {
  albumToFetch: "",
  fetchedAlbum: null,
  isLoading: false,
  hasError: "",
};

const albumPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM_FOCUS:
      return {
        ...state,
        albumToFetch: action.payload,
      };
    case SET_ALBUM_SONGS:
      return {
        ...state,
        fetchedAlbum: action.payload,
      };
    case SET_LOAD_ON_ALBUM:
      return {
        ...state,
        isLoading: true,
      };

    case SET_LOAD_OFF_ALBUM:
      return {
        ...state,
        isLoading: false,
      };

    case ERROR_ENCOUNTER_ALBUM:
      return {
        ...state,
        hasError: action.payload,
      };
    default:
      return state;
  }
};
export default albumPageReducer;

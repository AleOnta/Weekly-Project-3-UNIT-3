import {
  ERROR_ENCOUNTER,
  SET_ARTIST_QUERY,
  SET_ARTIST_RESULT,
  SET_ARTIST_TRACKS,
  SET_LOAD_OFF,
  SET_LOAD_ON,
} from "../actions";

const initialState = {
  artistToFetch: "",
  fetchedArtist: {
    artistInfo: {
      name: "",
      followers: "",
    },
    artistSongs: [],
  },
  isLoading: false,
  hasError: "",
};

const artistPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST_QUERY:
      return {
        ...state,
        artistToFetch: action.payload,
      };
    case SET_ARTIST_RESULT:
      return {
        ...state,
        fetchedArtist: {
          ...state.fetchedArtist,
          artistInfo: {
            ...state.artistInfo,
            name: action.payload.name,
            followers: action.payload.followers,
          },
        },
      };
    case SET_ARTIST_TRACKS:
      return {
        ...state,
        fetchedArtist: {
          ...state.fetchedArtist,
          artistSongs: action.payload,
        },
      };
    case SET_LOAD_ON:
      return {
        ...state,
        isLoading: true,
      };

    case SET_LOAD_OFF:
      return {
        ...state,
        isLoading: false,
      };

    case ERROR_ENCOUNTER:
      return {
        ...state,
        hasError: action.payload,
      };
    default:
      return state;
  }
};
export default artistPageReducer;

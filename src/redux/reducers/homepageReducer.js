import {
  ADD_FETCHED_SONGS_DEEPHOUSE,
  ADD_FETCHED_SONGS_HIPHOP,
  ADD_FETCHED_SONGS_ROCK,
  ERROR_ENCOUNTER_HOME,
  SET_LOAD_OFF_HOME,
  SET_LOAD_ON_HOME,
} from "../actions";

const initialState = {
  fetchedSongs: {
    rockSongs: [],
    deepHouseSongs: [],
    hipHopSongs: [],
  },
  isLoading: false,
  hasError: "",
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FETCHED_SONGS_ROCK:
      return {
        ...state,
        fetchedSongs: {
          ...state.fetchedSongs,
          rockSongs: action.payload,
        },
      };

    case ADD_FETCHED_SONGS_DEEPHOUSE:
      return {
        ...state,
        fetchedSongs: {
          ...state.fetchedSongs,
          deepHouseSongs: action.payload,
        },
      };

    case ADD_FETCHED_SONGS_HIPHOP:
      return {
        ...state,
        fetchedSongs: {
          ...state.fetchedSongs,
          hipHopSongs: action.payload,
        },
      };

    case SET_LOAD_ON_HOME:
      return {
        ...state,
        isLoading: true,
      };

    case SET_LOAD_OFF_HOME:
      return {
        ...state,
        isLoading: false,
      };

    case ERROR_ENCOUNTER_HOME:
      return {
        ...state,
        hasError: action.payload,
      };
    default:
      return state;
  }
};
export default homePageReducer;

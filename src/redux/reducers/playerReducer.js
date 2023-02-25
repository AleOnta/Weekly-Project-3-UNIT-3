import {
  SET_ALBUM_PLAYING,
  SET_PLAYER_QUEUE,
  SET_LOAD_ON_PLAYER,
  SET_LOAD_OFF_PLAYER,
  ERROR_ENCOUNTER_PLAYER,
} from "../actions";

const initialState = {
  onPlay: {
    currentlyPlaying: null,
    queue: [],
  },
  isLoading: false,
  hasError: "",
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM_PLAYING:
      return {
        ...state,
        onPlay: {
          ...state.onPlay,
          currentlyPlaying: action.payload,
        },
      };
    case SET_PLAYER_QUEUE:
      return {
        ...state,
        onPlay: {
          ...state.onPlay,
          queue: action.payload,
        },
      };
    case SET_LOAD_ON_PLAYER:
      return {
        ...state,
        isLoading: true,
      };

    case SET_LOAD_OFF_PLAYER:
      return {
        ...state,
        isLoading: false,
      };

    case ERROR_ENCOUNTER_PLAYER:
      return {
        ...state,
        hasError: action.payload,
      };
    default:
      return state;
  }
};
export default playerReducer;

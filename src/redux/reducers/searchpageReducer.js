import {
  ERROR_ENCOUNTER_SEARCH,
  SET_LOAD_OFF_SEARCH,
  SET_LOAD_ON_SEARCH,
  SET_QUERY_RESULT,
  SET_QUERY_STRING,
} from "../actions";

const initialState = {
  query: "",
  queryResult: [],
  isLoading: false,
  hasError: "",
};

const searchReducerPage = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY_STRING:
      return {
        ...state,
        query: action.payload,
      };
    case SET_QUERY_RESULT:
      return {
        ...state,
        queryResult: action.payload.data,
      };
    case SET_LOAD_ON_SEARCH:
      return {
        ...state,
        isLoading: true,
      };

    case SET_LOAD_OFF_SEARCH:
      return {
        ...state,
        isLoading: false,
      };

    case ERROR_ENCOUNTER_SEARCH:
      return {
        ...state,
        hasError: action.payload,
      };

    default:
      return state;
  }
};
export default searchReducerPage;

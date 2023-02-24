import { configureStore, combineReducers } from "@reduxjs/toolkit";
import albumPageReducer from "../reducers/albumpageReducer";
import homePageReducer from "../reducers/homepageReducer";
import searchReducerPage from "../reducers/searchpageReducer";

const mainReducer = combineReducers({
  homePageStore: homePageReducer,
  albumPageStore: albumPageReducer,
  searchPageStore: searchReducerPage,
});

const store = configureStore({
  reducer: mainReducer,
});
export default store;

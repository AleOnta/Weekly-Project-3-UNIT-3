import { configureStore, combineReducers } from "@reduxjs/toolkit";
import albumPageReducer from "../reducers/albumpageReducer";
import artistPageReducer from "../reducers/artistpageReducer";
import homePageReducer from "../reducers/homepageReducer";
import myLibraryReducer from "../reducers/myLibraryReducer";
import searchReducerPage from "../reducers/searchpageReducer";

const mainReducer = combineReducers({
  homePageStore: homePageReducer,
  albumPageStore: albumPageReducer,
  searchPageStore: searchReducerPage,
  artistPageStore: artistPageReducer,
  favourites: myLibraryReducer,
});

const store = configureStore({
  reducer: mainReducer,
});
export default store;

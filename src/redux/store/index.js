import { configureStore, combineReducers } from "@reduxjs/toolkit";
import albumPageReducer from "../reducers/albumpageReducer";
import homePageReducer from "../reducers/homepageReducer";

const mainReducer = combineReducers({
  homePageStore: homePageReducer,
  albumPageStore: albumPageReducer,
});

const store = configureStore({
  reducer: mainReducer,
});
export default store;

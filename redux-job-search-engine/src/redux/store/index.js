/** @format */

import { createStore } from "redux";
import { MainReducer } from "../reducers";

export const initialState = {
  searchResults: {
    results: [],
  },
  favourites: {
    companies: [],
  },
};

const store = createStore(
  MainReducer,
  initialState,
  window._REDUX_DETOOLS_EXTENSION_ && window._REDUX_DETOOLS_EXTENSION_()
);

export default store;

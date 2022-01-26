/** @format */

import { createStore } from "redux";
import { mainReducer } from "../reducers";

export const initialState = {
  searchResult: {
    allResults: [],
  },
};

const store = createStore(
  mainReducer,
  initialState,
  window._REDUX_DETOOLS_EXTENSION_ && window._REDUX_DETOOLS_EXTENSION_()
);

export default store;

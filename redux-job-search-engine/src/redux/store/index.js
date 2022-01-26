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
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

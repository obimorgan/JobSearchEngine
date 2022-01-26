/** @format */

import { createStore } from "redux";
import mainReducer from "../reducers";

export const initialState = {
  favourites: {
    companies: [],
  },
};

const store = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

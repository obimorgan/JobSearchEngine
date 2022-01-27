/** @format */

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import searchReducer from "../reducers/searchReducer";
import favouritesReducer from "../reducers/favouritesReducer";
import thunk from "redux-thunk";

const composeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const initialState = {
  favourites: {
    companies: [],
  },
  categorySearch: {
    results: [],
    errorStatus: null,
  },
};

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  categorySearch: searchReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  composeThatAlwaysWorks(applyMiddleware(thunk))
);

export default store;

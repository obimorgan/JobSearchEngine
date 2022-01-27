/** @format */

import { ADD_TO_FAVOURITES } from "../actions";
import { REMOVE_FROM_FAVOURITES } from "../actions";
import { initialState } from "../store";

const favouritesReducer = (state = initialState.favourites, action) => {
  switch (action.type) {
    //--------->>
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };
    //--------->>
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        companies: state.companies.filter((company, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;

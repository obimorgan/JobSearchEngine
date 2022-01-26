/** @format */

import { ADD_TO_FAVOURITES } from "../actions";
import { REMOVE_FROM_FAVOURITES } from "../actions";
import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    //--------->>
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          companies: [...state.favourites.companies, action.payload],
        },
      };
    //--------->>
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites.companies,
          companies: [
            state.favourites.companies.filter(
              (company) => company !== action.payload
            ),
          ],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;

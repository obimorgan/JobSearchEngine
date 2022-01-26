/** @format */

import { initialState } from "../store";

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_TO_ADD": {
      return {
        ...state,
        data: {
          ...state.data,
          results: [...state.data.results, action.payload],
        },
      };
    }
    case "ADD_TO_FAVOURITES": {
      return {
        ...state,
        favourites: {
          ...state.favourites,
          companies: [...state.favourites.companies, action.payload],
        },
      };
    }
  }
};

export default MainReducer;

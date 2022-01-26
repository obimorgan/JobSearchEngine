/** @format */
import { ADD_SEARCH_RESULT, ADD_TO_FAVOURITES } from "../actions";
import { initialState } from "../store";

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_RESULT: {
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          results: [...state.searchResults.results, action.payload],
        },
      };
    }
    case ADD_TO_FAVOURITES: {
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

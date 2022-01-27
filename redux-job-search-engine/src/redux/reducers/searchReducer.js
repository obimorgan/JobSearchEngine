/** @format */
import { initialState } from "../store";
import { SET_JOBS_BY_CATEGORY } from "../actions";
import { SET_JOBS } from "../actions";

const searchReducer = (state = initialState.categorySearch, action) => {
  switch (action.type) {
    //--------->>
    case SET_JOBS_BY_CATEGORY:
      return {
        ...state,
        results: [...state.results, action.payload],
      };
    //--------->>
    case SET_JOBS:
      return {
        ...state,
        results: [...state.results, action.payload],
      };
    default:
      return state;
  }
};

export default searchReducer;

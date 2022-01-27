/** @format */
import { initialState } from "../store";
import { SET_JOBS_BY_CATEGORY, SET_JOBS, CATCH_ERROR } from "../actions";

const searchReducer = (state = initialState.categorySearch, action) => {
  switch (action.type) {
    //--------->>
    case SET_JOBS_BY_CATEGORY:
      return {
        ...state,
        results: action.payload,
      };
    //--------->>
    case SET_JOBS:
      return {
        ...state,
        results: action.payload,
      };

    //--------->>
    case CATCH_ERROR:
      return {
        ...state,
        errorStatus: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;

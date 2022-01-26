/** @format */

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

export const addSearchResultAction = () => ({
  type: ADD_SEARCH_RESULT,
});

export const addToFavouriesAction = (company_name) => ({
  type: ADD_TO_FAVOURITES,
  payload: company_name,
});

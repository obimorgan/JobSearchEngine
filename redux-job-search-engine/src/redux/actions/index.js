/** @format */

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";

export const addToFavouriesAction = (company_name) => ({
  type: ADD_TO_FAVOURITES,
  payload: company_name,
});

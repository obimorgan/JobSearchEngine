/** @format */

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";

export const addToFavourites = (data) => ({
  type: ADD_TO_FAVOURITES,
  payload: data,
});

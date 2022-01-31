/** @format */

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_JOBS_BY_CATEGORY = "SET_JOBS_BY_CATEGORY";
export const SET_JOBS = "SET_JOBS";
export const CATCH_ERROR = "CATCH_ERROR";
export const SET_DISPLAY = "SET_DISPLAY";

export const setJobsAction = (searchInput) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${searchInput}&limit=10`
      );
      if (resp.ok) {
        let data = await resp.json();
        setTimeout(() => {
          console.log("settimeout is working");
          console.log("My States", getState());
          dispatch({
            type: SET_JOBS,
            payload: data.data,
          });
        }, 1000);
      } else {
        console.log("error");
        dispatch({
          type: CATCH_ERROR,
          payload: resp.status,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setJobsByCategoryAction = (category) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?category=${category}&limit=10`
      );
      if (resp.ok) {
        let data = await resp.json();
        dispatch({
          type: SET_JOBS_BY_CATEGORY,
          payload: data.data,
        });
        dispatch({
          type: SET_DISPLAY,
          payload: false,
        });
      } else {
        console.log("error");
        dispatch({
          type: CATCH_ERROR,
          payload: resp.status,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFromFavouritesAction = (index) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: index,
});

export const addToFavouritesAction = (data) => {
  return async (dispatch, getState) => {
    console.log("here's my state currently", getState());
    setTimeout(() => {
      dispatch({
        type: ADD_TO_FAVOURITES,
        payload: data,
      });
    }, 1000);
  };
};

import * as ReadableAPI from '../components/ReadableAPI.jsx'

export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS'
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'

export function addRecipe ({ day, recipe, meal }) {
  return {
    type: ADD_RECIPE,
    recipe,
    day,
    meal,
  }
}

export function removeFromCalendar ({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal,
  }
}

export function loadCategoriesSuccess(categories) {
  return {type: LOAD_CATEGORIES_SUCCESS,
          categories};
}

export function loadPostsSuccess(posts) {
  return {type: LOAD_POSTS_SUCCESS,
          posts};
}

export function loadCategories() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return ReadableAPI
      .getCategories()
      .then(categories => {
        dispatch(loadCategoriesSuccess(categories));
      }).catch(error => {
        throw(error);
      });
  };
}

export function loadAllPosts() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return ReadableAPI
      .getAllPosts()
      .then(posts => {
        dispatch(loadPostsSuccess(posts));
      }).catch(error => {
        throw(error);
      });
  };
}

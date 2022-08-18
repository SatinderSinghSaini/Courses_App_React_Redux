import { actionTypes } from "./actionTypes";
import * as authorApi from "../../api/authorApi";

function loadAuthorsSuccess(authors) {
  return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors: authors };
}

export function loadAuthors() {
  // dispatch to this function is passed by thunk middleware
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}

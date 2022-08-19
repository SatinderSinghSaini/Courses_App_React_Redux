import { actionTypes } from "../actions/actionTypes";
import { initialState } from "./initialState";

function isActionEndsWithSuccess(actionType) {
  return actionType.substring(actionType.length - 8) === "_SUCCESS";
}

export default function apiStatusReducer(
  state = initialState.apiCallInProgress,
  action
) {
  if (action.type === actionTypes.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === actionTypes.API_CALL_ERROR ||
    isActionEndsWithSuccess(action.type)
  ) {
    return state - 1;
  }
  return state;
}

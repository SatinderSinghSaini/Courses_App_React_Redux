import { actionTypes } from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    case actionTypes.CREATE_COURSE_SUCCESS:
      console.log(action.course);
      return [...state, { ...action.course }];
    case actionTypes.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case actionTypes.DELETE_COURSE_OPTIMISTIC:
      return state.filter((course) => course.id !== action.course.id);
    default:
      return state;
  }
}

import { actionTypes } from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: actionTypes.CREATE_COURSE, course };
}

function loadCoursesSuccess(courses) {
  return { type: actionTypes.LOAD_COURSES_SUCCESS, courses: courses };
}

function updateCoursesSuccess(course) {
  return { type: actionTypes.UPDATE_COURSE_SUCCESS, course: course };
}
function createCourseSuccess(course) {
  return { type: actionTypes.CREATE_COURSE_SUCCESS, course: course };
}

//Thunk is function that returns function that can execute later
export function loadCourses() {
  // dispatch to this function is passed by thunk middleware
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  // dispatch to this function is passed by thunk middleware
  console.log(course);
  return function (dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCoursesSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}

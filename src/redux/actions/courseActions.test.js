import * as courseActions from "./courseActions";
import { actionTypes } from "./actionTypes";
import { courses } from "../../../tools/mockData";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";

//Test as async actions
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Courses Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS actions when loading courses", () => {
      const store = mockStore({ courses: [] });
      const expectedActions = [
        { type: actionTypes.BEGIN_API_CALL },
        { type: actionTypes.LOAD_COURSES_SUCCESS, courses: courses },
      ];
      fetchMock.mock("*", {
        body: courses,
        headers: { "content-type": "application/json" },
      });
      store.dispatch(courseActions.loadCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("createCourseSuccess", () => {
  it("should create a CREATE_COURSE_SUCCESS action", () => {
    const mockCourse = courses[0];
    const expectedAction = {
      type: actionTypes.CREATE_COURSE_SUCCESS,
      course: mockCourse,
    };

    expect(courseActions.createCourseSuccess(mockCourse)).toEqual(
      expectedAction
    );
  });
});

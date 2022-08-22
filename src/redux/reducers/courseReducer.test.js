import courseReducer from "./courseReducer";
import * as courseActions from "../actions/courseActions";

it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" },
  ];
  const newCourse = { id: 2, title: "New Course" };
  const action = courseActions.updateCourseSuccess(newCourse);

  const newState = courseReducer(initialState, action);
  const updatedCourse = newState.find((course) => course.id === newCourse.id);
  expect(updatedCourse.title).toEqual("New Course");
});

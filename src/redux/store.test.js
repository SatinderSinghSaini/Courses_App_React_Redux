import { createStore } from "redux";
import { initialState } from "./reducers/initialState";
import rootReducer from "./reducers";
import * as courseActions from "./actions/courseActions";

it("should handle course creation", () => {
  const course = {
    title: "New Course",
  };
  const action = courseActions.createCourseSuccess(course);
  const store = createStore(rootReducer, initialState);
  store.dispatch(action);

  expect(store.getState().courses[0]).toEqual(course);
});

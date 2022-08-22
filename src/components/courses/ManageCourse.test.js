import React from "react";
import { mount } from "enzyme";
import { ManageCourse } from "./ManageCourse";
import { authors, courses, newCourse } from "../../../tools/mockData";
import { BrowserRouter } from "react-router-dom";

function renderComponent(args) {
  const defaultProps = {
    courses: courses,
    authors: authors,
    course: newCourse,
    loadCourses: jest.fn(),
    loadAuthors: jest.fn(),
    saveCourse: jest.fn(),
  };
  const props = { ...defaultProps, ...args };
  return mount(
    <BrowserRouter>
      <ManageCourse {...props} />
    </BrowserRouter>
  );
}

it("sets error when attempting to save empty title field", () => {
  const wrapper = renderComponent();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is Required");
});

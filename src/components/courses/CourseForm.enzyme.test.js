import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";

function renderForm(args) {
  const defaultProps = {
    course: [],
    authors: [],
    errors: {},
    onChange: () => {},
    onSave: () => {},
    saving: false,
  };
  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
}

it("should render form and header", () => {
  const wrapper = renderForm();
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

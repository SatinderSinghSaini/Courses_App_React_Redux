import React from "react";
import { render } from "@testing-library/react";
import CourseForm from "./CourseForm";

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
  return render(<CourseForm {...props} />);
}

it("should render form and header", () => {
  const { getByText } = renderForm();
  getByText("Add Course");
});

it("should set Save button lable to Save when saving is false", () => {
  const { getByText, debug } = renderForm();
  console.log(debug);
  getByText("Save");
});

it("should set Save button lable to Saving... when saving is true", () => {
  const { getByText } = renderForm({ saving: true });
  getByText("Saving...");
});

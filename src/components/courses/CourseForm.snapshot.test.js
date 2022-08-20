import React from "react";
import CourseForm from "./CourseForm";
import render from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";

it("set Save button lable 'Saving...' when saving is true", () => {
  const tree = render.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onChange={jest.fn()}
      onSave={jest.fn()}
      saving={false}
    />
  );
  expect(tree).toMatchSnapshot();
});

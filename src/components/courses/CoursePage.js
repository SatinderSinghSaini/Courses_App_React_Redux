import React, { useState } from "react";
import { connect } from "react-redux";
import { createCourse } from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

const CoursePage = (props) => {
  const [course, setCourse] = useState({ title: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCourse(course);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Course Page</h3>
      <input
        type="text"
        onChange={() => setCourse({ ...course, title: event.target.value })}
        name="title"
        value={course.title}
      />
      <input type="submit" value="Save" />
      {props.courses.map((course) => (
        <div key={course.title}>{course.title}</div>
      ))}
    </form>
  );
};

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { courses: state.courses };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: (course) => dispatch(createCourse(course)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);

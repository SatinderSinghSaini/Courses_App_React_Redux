import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createCourse, loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

const CoursePage = (props) => {
  useEffect(() => {
    if (props.courses.length === 0) {
      props.loadCourses().catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (props.authors.length === 0) {
      props.loadAuthors().catch((err) => console.log(err));
    }
  }, []);
  return (
    <>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <h2>Courses</h2>
      <CourseList courses={props.courses} />
    </>
  );
};

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses:
      state.courses.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find(
                (author) => author.id === course.authorId
              )?.name,
            };
          }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createCourse, loadCourses, loadAuthors },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);

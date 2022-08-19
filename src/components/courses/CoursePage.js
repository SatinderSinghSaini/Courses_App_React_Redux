import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses, deleteCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

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

  const handleDelete = (course) => {
    toast.success("Course Deleted.");
    props.deleteCourse(course).catch((error) => {
      toast.error("Delete Failed. " + error.message, { autoClose: false });
    });
  };
  return (
    <>
      {props.loading ? (
        <Spinner />
      ) : (
        <>
          <Link className="btn btn-primary" to="/course">
            Add Course
          </Link>
          <h2>Courses</h2>
          <CourseList onDeleteClick={handleDelete} courses={props.courses} />
        </>
      )}
    </>
  );
};

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  deleteCourse: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
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
    loading: state.apiCallInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { loadCourses, loadAuthors, deleteCourse },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);

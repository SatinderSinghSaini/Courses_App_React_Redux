import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

const ManageCourse = (props) => {
  const [course, setCourse] = useState(newCourse);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (props.courses.length === 0) {
      props.loadCourses().catch((err) => console.log(err));
    } else {
      if (slug) {
        const course = {
          ...props.courses.find((course) => course.slug === slug),
        };
        setCourse(course ? course : newCourse);
      }
    }
  }, [props.courses]);

  useEffect(() => {
    if (props.authors.length === 0) {
      props.loadAuthors().catch((err) => console.log(err));
    }
  }, []);

  const isFormValid = () => {
    const { title, authorId, category } = course;
    const errors = {};
    if (!title) errors.title = "Title is Required";
    if (!authorId) errors.authorId = "AuthorId is Required";
    if (!category) errors.category = "Category is Required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]:
        name === "id" || name === "authorId" ? parseInt(value, 10) : value,
    }));
  };
  const handleSave = (event) => {
    event.preventDefault();
    if (!isFormValid()) return;
    setSaving(true);
    props
      .saveCourse(course)
      .then(() => {
        toast.success("Course Saved!");
        navigate("/courses");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  };

  return (
    <>
      {props.courses.length === 0 || props.authors.length === 0 ? (
        <Spinner />
      ) : (
        <CourseForm
          course={course}
          authors={props.authors}
          errors={errors}
          onChange={handleChange}
          onSave={handleSave}
          saving={saving}
        />
      )}
    </>
  );
};

ManageCourse.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
};

export function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}

//ownProps is provided by redux to get params related data
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

//When mapDispatchToProps is object then its properties will be automatically wrapped with
//dispatch by connect method
const mapDispatchToProps = {
  loadCourses: loadCourses,
  loadAuthors: loadAuthors,
  saveCourse: saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);

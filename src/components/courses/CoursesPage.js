import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as courseActions from "../../redux/action/courseActions";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //alert(this.state.course.title);
    //this.props.dispatch(courseActions.createCourse(this.state.course));
    // method 1 : this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2>
          <input
            type="text"
            value={this.state.course.title}
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Save" />
          {this.props.courses.map((course) => (
            <div key={course.title}>{course.title}</div>
          ))}
        </form>
      </>
    );
  }
}

CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  // method 1: createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

function mapStateToProps(state /*,ownProps*/) {
  return {
    courses: state.courses,
    // Be specific. else component will change for any prperty change
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //method 1 : createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions, dispatch),
  };
}
// when we omit "mapDispatchToProps" dispatch  property inject automatically
// export default connect(mapStateToProps)(CoursesPage);

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

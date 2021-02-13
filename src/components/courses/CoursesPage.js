import React from "react";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  }

  render() {
    return (
      <>
        <form>
          <h2>Courses</h2>
          <input
            type={this.state.course.title}
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Save" />
        </form>
      </>
    );
  }
}

export default CoursesPage;

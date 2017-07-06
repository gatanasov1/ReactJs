import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const state = Object.assign({}, this.state);
    state.course.title = event.target.value;
    this.setState(state);
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          value={this.state.course.title}
          onChange={this.onTitleChange}
        />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
        <p>{this.state.course.title}</p>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

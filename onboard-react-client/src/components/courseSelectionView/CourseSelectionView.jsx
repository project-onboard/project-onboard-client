import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'react-md';
import CoursesManager from './../../managers/coursesManager';

class CourseSelectionView extends PureComponent {
  constructor({ match }) {
    super();

    this.state = {
      courses: []
    };

    this.coursesManager = new CoursesManager();
    this.coursesManager.didChangeCourses = courses => {
      this.setState({
        courses
      });
    };
  }

  render() {
    const listItemJSX = this.state.courses.map(course => {
      return (
        <Link to={'/course/' + course.id}>
          <ListItem primaryText={course.title} />
        </Link>
      );
    });

    return (
      <div>
        <div className='md-grid'>
          <List className='md-cell md-paper md-paper--1'>{listItemJSX}</List>
        </div>
      </div>
    );
  }
}

export default CourseSelectionView;

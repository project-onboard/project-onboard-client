import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Button } from 'react-md';
import CoursesManager from './../../managers/coursesManager';
import './courseselectionview.css'

class CourseSelectionView extends PureComponent {
  constructor({ username }) {
    super();

    this.username = username
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
        <Link className='course-selection-class' to={'/course/' + course.id}>
          <ListItem tileClassName='course-selection-list-item' primaryText={course.title} />
        </Link>
      );
    });

    return (
      <div className='big-container'>
        <div>
          <p className='course-list-title'>Courses List</p>

          <p className='course-list-username'>Welcome, {this.username}!</p>

          <List className='course-selection-list'>{listItemJSX}</List>
        </div>

        <Link to={'/leaderboard/'}>
          <Button className='leaderboard-button' primary raised>Leaderboard</Button>
        </Link>
      </div>
    );
  }
}

export default CourseSelectionView;

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'react-md';

class CourseSelectionView extends PureComponent {
  render() {
    return (
      <div>
        <div className='md-grid'>
          <List className='md-cell md-paper md-paper--1'>
            <Link to='/course/123'>
              <ListItem primaryText='Course 123' />
            </Link>
          </List>
        </div>
      </div>
    );
  }
}

export default CourseSelectionView;

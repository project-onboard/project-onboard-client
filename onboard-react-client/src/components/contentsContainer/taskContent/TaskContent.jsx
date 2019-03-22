import React, { PureComponent } from 'react';
import { TextField } from 'react-md';
import './taskcontent.css';
import UploadInput from './UploadInput';

export default class TaskContent extends PureComponent {
  state = {
    url:
      'http://thewowstyle.com/wp-content/uploads/2015/03/Desktop-Wallpaper-HD2.jpg'
  };

  handleUrlChange = url => {
    this.setState({ url });
  };

  render() {
    if (this.props.isEditing) {
      return (
        <div class='box'>
          <p>This is a task content</p>
        </div>
      );
    } else {
      return (
        // <div>
          <UploadInput/>
        // </div>
      );
    }
  }
}

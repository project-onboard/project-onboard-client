import React, { PureComponent } from 'react';
import { TextField } from 'react-md';
import './taskcontent.css';
import UploadInput from './UploadInput';
import socket from './../../../socket'

export default class TaskContent extends PureComponent {
  state = {
    url:
      'http://thewowstyle.com/wp-content/uploads/2015/03/Desktop-Wallpaper-HD2.jpg'
  };

  componentWillMount() {
    this.socket = socket
  }

  handleUrlChange = url => {
    this.setState({ url });
  };

  handleUploadedFile = () => {
    console.log("uploaded file for username", this.props.username)
    socket.emitLeaderboardFromPublisher({ name: this.props.username, id: this.username })
  }

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
          <UploadInput userDidSetFile={this.handleUploadedFile}/>
        // </div>
      );
    }
  }
}

import React, { PureComponent } from 'react';
import { TextField } from 'react-md';
import './image-content.css';

export default class ImageContent extends PureComponent {
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
          <TextField
            id='url'
            placeholder='Enter a URL to an image here'
            onChange={this.handleUrlChange}
            value={this.state.url}
          />
        </div>
      );
    } else {
      return <img class='image' src={this.state.url} />;
    }
  }
}

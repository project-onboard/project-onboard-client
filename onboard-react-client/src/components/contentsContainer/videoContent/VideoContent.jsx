import React, {PureComponent} from 'react';
import {TextField} from 'react-md';
import './videocontent.css'

export default class VideoContent extends PureComponent {
    state = {
        url: ''
    };

    handleUrlChange = url => {
        this.props.updateContentChange({url: url, type: "video"});
        this.setState({url});
    };

    render() {
        if (this.props.isEditing) {
            return (
                <div className='video-content-box'>
                    <div className='youtube-text'>https://www.youtube.com/watch?v=</div>
                    <div className='spacing-after-youtube-text'></div>
                    <TextField
                        id='url'
                        placeholder='Enter a URL to a video here'
                        onChange={this.handleUrlChange}
                        value={this.props.url}
                    />
                </div>
            );
        } else {
            return (
                <iframe
                    width='800'
                    height='450'
                    frameborder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                    src={"https://www.youtube.com/embed/" + this.props.url}
                />
            );
        }
    }
}

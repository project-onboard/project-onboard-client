import React, {PureComponent} from 'react';
import {TextField} from 'react-md';
import './image-content.css';

export default class ImageContent extends PureComponent {
    state = {
        url:
            ''
    };

    handleUrlChange = (url) => {
        this.props.updateContentChange({url: url, type: "image"});
        this.setState({url});
    };

    render() {
        if (this.props.isEditing) {
            return (
                <div class='box'>
                    <TextField
                        id='url'
                        placeholder='Enter a URL to an image here'
                        onChange={this.handleUrlChange}
                        value={this.props.url}
                    />
                </div>
            );
        } else {
            return <img class='image' src={this.props.url}/>;
        }
    }
}

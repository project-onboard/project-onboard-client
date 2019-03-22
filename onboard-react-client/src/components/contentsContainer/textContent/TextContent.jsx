import React, { PureComponent } from 'react';
import { TextField } from 'react-md';

export default class TextContent extends PureComponent {
  state = {
    max: 700,
    title: "",
    text: "",
  };

  setDiv = (div) => {
    this.div = div;
    this.setMaxWidth();
  };

  setMaxWidth = () => {
    // Make sure mobile devices don't overflow
    if (this.div) {
      this.setState({ max: Math.min(700, this.div.offsetWidth) });
    }
  };

   handleTitleChange = (title) => {
       this.props.updateContentChange({title: title, text: this.state.text})
       this.setState({title});
   };

    handleTextChange = (text) => {
        this.props.updateContentChange({title: this.state.title, text: text})
        this.setState({text});
    };

    render() {
    const {  max, text, title } = this.state;
    if(this.props.isEditing) {
        return (
            <div className="md-grid">
                <div className="md-cell md-cell--12" ref={this.setDiv}>
                    <TextField
                        id="title"
                        placeholder="Title"
                        onChange={this.handleTitleChange}
                        resize={{ max }}
                        value = {title}
                    />
                </div>
                <div className="md-cell md-cell--12">
                    <TextField
                        placeholder="Text"
                        resize={{ min: 200, max }}
                        value={text}
                        rows ={1}
                        onChange={this.handleTextChange}
                    />
                </div>
            </div>
        );
    } else {
        return (<div><p>{this.state.title}</p> <p>{this.state.text}</p></div>)
    }

  }
}

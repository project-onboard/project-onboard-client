import React, { PureComponent } from 'react';
import { TextField } from 'react-md';
import { FontIcon, Button, Paper, NavigationDrawer, SVGIcon} from 'react-md';

export default class EmptyContent extends PureComponent {
  state = {
    value: 'This is some default text to place',
    max: 340,
  };

  setDiv = (div) => {
    this.div = div;
    this.setMaxWidth();
  };

  setMaxWidth = () => {
    // Make sure mobile devices don't overflow
    if (this.div) {
      this.setState({ max: Math.min(340, this.div.offsetWidth) });
    }
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value, max } = this.state;
    return (
      <div>
            <Button floating secondary>text_format</Button>
            <Button floating secondary>insert_photo</Button>
            <Button floating secondary> video_library </Button>
            <Button floating secondary> assignment </Button>
      </div>
    );
  }
}

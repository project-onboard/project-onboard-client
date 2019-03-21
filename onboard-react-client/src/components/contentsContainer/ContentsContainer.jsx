import React, { PureComponent } from 'react';
import { TextField } from 'react-md';
import { FontIcon, Button, Paper, NavigationDrawer, SVGIcon} from 'react-md';
import EmptyContent from './emptyContent/EmptyContent';
import "./contentscontainer.css"

export default class ContentsContainer extends PureComponent {
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
            <h2 className="main-contents-header">Currently on page: {this.props.page}</h2>
            <Button floating tooltipLabel="add contents" tooltipPosition="top">add</Button>
            <div>
                <Paper
                  key={0}
                  zDepth={0}
                  raiseOnHover={true}
                >
                <EmptyContent/>     
                </Paper>
            </div>
      </div>
    );
  }
}

import React, { PureComponent } from 'react';
import { TextField } from 'react-md';
import { FontIcon, Button, Paper, NavigationDrawer, SVGIcon} from 'react-md';
import EmptyContent from './emptyContent/EmptyContent';

export default class ContentsContainers extends PureComponent {
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
            <h2 className="md-cell md-cell--12 section-header">Currently on page: {this.props.page}</h2>
            {/* <section className="md-text-container md-cell md-cell--12"> */}
            <Button floating tooltipLabel="add contents" tooltipPosition="top">add</Button>
            <div className="papers__container ">
                <Paper
                  key={0}
                  zDepth={0}
                  raiseOnHover={true}
                  className="papers__example content-edit-box"
                >
                <EmptyContent/>     
                </Paper>
            </div>
            {/* </section> */}
      </div>
    );
  }
}

import React, { PureComponent } from 'react';
import { TextField } from 'react-md';
import { FontIcon, Button, Paper, NavigationDrawer, SVGIcon} from 'react-md';
import EmptyContent from './emptyContent/EmptyContent';
import "./contentscontainer.css"
import TextContent from "./textContent/TextContent";
import ContentCard from "./contentCard/ContentCard";

export default class ContentsContainer extends PureComponent {
  state = {
    value: 'This is some default text to place',
    max: 340,
    count: 0,
    contents: [],
  };

  addNewCard = () => {
      const newContent = {index: this.state.count, type: "empty"}
      this.setState((prevState, props) => ({
          count: prevState.count + 1,
          contents: [...prevState.contents, newContent]
      }));
  };

  setCardType = (newIndex, newType) => {
      const newContent = {index:newIndex, type:newType};
      this.setState(state => {
          const contents = state.contents.map(item => {
              if(item.index == newIndex) {
                  item.type = newType;
              }
              return item;
          });
          return {
              contents:contents
          };
      });
      console.log(this.state.contents);
  };



  render() {
    const cards =  this.state.contents.map((card) => {
        return (<ContentCard type = {card.type} index={card.index} setCardType={this.setCardType}/>)
     });

    return (
      <div>
            <h2 className="main-contents-header">Currently on page: {this.props.page}</h2>
            <Button floating tooltipLabel="add contents" tooltipPosition="top"
                    onClick={this.addNewCard}>add</Button>
            <div>
                {cards}
            </div>
      </div>
    );
  }
}

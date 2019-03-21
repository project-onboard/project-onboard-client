import React, {PureComponent} from 'react';
import {TextField} from 'react-md';
import {FontIcon, Button, Paper, NavigationDrawer, SVGIcon} from 'react-md';
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
        this.setState(state => {
            const contents = state.contents.map(item => {
                if (item.index == newIndex) {
                    item.type = newType;
                }
                return item;
            });
            return {
                contents: contents
            };
        });
    };

    deleteContent = index => {
        this.setState(state => {
            const contents = state.contents.filter(content => content.index !== index);

            return {
                contents,
            };
        });
    };

    render() {
        const cards = this.state.contents.map((card) => {
            return (<ContentCard type={card.type}
                                 index={card.index}
                                 setCardType={this.setCardType}
                                 isEditing={this.props.isEditing}
                                 deleteContent={this.deleteContent}
            />)
        });

        const addContent = (
            <div>
                <Button className='add-content-button' floating
                        primary
                        tooltipLabel="add contents"
                        tooltipPosition="top"
                        onClick={this.addNewCard}>
                    add
                </Button>

            </div>);

        return (
            <div>
                <h2 className="main-contents-header">Currently on page: {this.props.page}</h2>
                {(this.props.isEditing) ? addContent : ''}
                <div>
                    {cards}
                </div>
            </div>
        );
    }
}

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
        currentSection: 0,
        currentModule: 0
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.contents.length === 0 ||
            (prevState.currentSection!= this.props.sectionIndex||
                prevState.currentModule != this.props.moduleIndex)){
            this.setState((prevState, props) => ({
                contents: props.contents,
                currentModule: props.moduleIndex,
                currentSection: props.sectionIndex,
            }));
            console.log("Yawei");
            console.log(this.props.contents);
        }
    }

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

    updateContentChange = (index, newContent) => {
        var newContents = this.state.contents;
        newContents[index] = newContent;
        this.setState({
            contents: newContents
        });
        this.props.getCurrentContents(newContents);
    };

    render() {
        const cards = this.state.contents.map((card) => {
            return (<ContentCard type={card.type}
                                 index={card.index}
                                 title={card.title}
                                 text={card.text}
                                 setCardType={this.setCardType}
                                 isEditing={this.props.isEditing}
                                 deleteContent={this.deleteContent}
                                 updateContentChange = {(content) => {
                                     this.updateContentChange(card.index, content)
                                 }}
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

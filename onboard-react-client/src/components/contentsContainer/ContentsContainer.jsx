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
        }
    }

    addNewCard = () => {
        const newContent = { type: "empty"}
        this.setState((prevState, props) => ({
            count: prevState.count + 1,
            contents: [...prevState.contents, newContent]
        }));
    };

    setCardType = (newIndex, newType) => {

            const newContents = this.state.contents.map((item,index)  => {
                if (index === newIndex) {
                    item.type = newType;
                }
                return item;
            });

            this.setState({contents:newContents});

    };

    deleteContent = index => {
        this.state.contents.splice(index, 1);

        const newContents = this.state.contents.map( item => { return item } )

        let newState = {
            contents: newContents
        };


        this.props.getCurrentContents(newState.contents);

        this.setState( newState );

    };

    updateContentChange = (updateIndex, newContent) => {
        var newContents = this.state.contents;
        newContents[updateIndex] = newContent;
        this.setState({
            contents: newContents
        });
        this.props.getCurrentContents(newContents);
    };

    render() {
        const cards = this.state.contents.map((card,index) => {
            return (<ContentCard type={card.type}
                                 index={index}
                                 title={card.title}
                                 text={card.text}
                                 url={card.url}
                                 setCardType={this.setCardType}
                                 isEditing={this.props.isEditing}
                                 username={this.props.username}
                                 deleteContent={this.deleteContent}
                                 updateContentChange = {(content) => {
                                     this.updateContentChange(index, content)
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

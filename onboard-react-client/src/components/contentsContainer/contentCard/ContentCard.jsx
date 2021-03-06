import React, {PureComponent} from 'react';
import {TextField} from 'react-md';
import {FontIcon, Button, Paper, NavigationDrawer, SVGIcon} from 'react-md';
import EmptyContent from "../emptyContent/EmptyContent";
import TextContent from "../textContent/TextContent";
import ImageContent from "../imageContent/ImageContent";
import VideoContent from "../videoContent/VideoContent";
import TaskContent from "../taskContent/TaskContent";
import "./contentcard.css"

export default class ContentCard extends PureComponent {

    render() {
        return (
            <Paper className='content-card' key={0} zDepth={0} raiseOnHover={this.props.isEditing}>
                {this.props.isEditing ? (
                    <Button className='delete-content-button' icon onClick={() => {
                        this.props.deleteContent(this.props.index);
                    }}>delete</Button>) : null}
                {this.props.type == "empty" ? <EmptyContent
                    isEditing={this.props.isEditing}
                    index={this.props.index}
                    type={this.props.type}
                    setCardType={this.props.setCardType}
                /> : null}
                {(this.props.type == "Text") ? <TextContent
                    title={this.props.title}
                    text={this.props.text}
                    updateContentChange={this.props.updateContentChange}
                    isEditing={this.props.isEditing}/> : null}
                {(this.props.type == "image") ? <ImageContent
                    url={this.props.url}
                    updateContentChange={this.props.updateContentChange}
                    isEditing={this.props.isEditing}/> : null}
                {(this.props.type == "video") ? <VideoContent
                    url={this.props.url}
                    updateContentChange={this.props.updateContentChange}
                    isEditing={this.props.isEditing}/> : null}
                {(this.props.type == "task") ? <TaskContent
                    isEditing={this.props.isEditing} username={this.props.username}/> : null}
            </Paper>
        );
    }
}

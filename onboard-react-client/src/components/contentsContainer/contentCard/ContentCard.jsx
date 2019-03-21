import React, {PureComponent} from 'react';
import {TextField} from 'react-md';
import {FontIcon, Button, Paper, NavigationDrawer, SVGIcon} from 'react-md';
import EmptyContent from "../emptyContent/EmptyContent";
import TextContent from "../textContent/TextContent";
import "./contentcard.css"

export default class ContentCard extends PureComponent {
    render() {
        return (
            <Paper key={0} zDepth={0} raiseOnHover={this.props.isEditing}>
                <Button className='delete-content-button' icon onClick={() => {
                    this.props.deleteContent(this.props.index);
                }}>delete</Button>
                {this.props.type == "empty" ? <EmptyContent
                    isEditing={this.props.isEditing}
                    index={this.props.index}
                    type={this.props.type}
                    setCardType={this.props.setCardType}
                /> : null}
                {(this.props.type == "text") ? <TextContent
                    isEditing={this.props.isEditing}/> : null}
            </Paper>
        );
    }
}

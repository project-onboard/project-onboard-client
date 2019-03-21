import React, { PureComponent } from 'react';
import { TextField } from 'react-md';
import { FontIcon, Button, Paper, NavigationDrawer, SVGIcon} from 'react-md';
import EmptyContent from "../emptyContent/EmptyContent";
import TextContent from "../textContent/TextContent";

export default class ContentCard extends PureComponent {



    render() {
        return (
            <Paper key={0} zDepth={0} raiseOnHover={true}>
                { this.props.type == "empty"? <EmptyContent
                    index={this.props.index}
                    type={this.props.type}
                    setCardType={this.props.setCardType}
                />: null}
                { (this.props.type == "text")? <TextContent
                />: null}
            </Paper>
        );
    }
}

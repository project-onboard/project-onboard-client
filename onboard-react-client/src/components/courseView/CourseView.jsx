/* eslint-disable react/no-array-index-key */

import React, { PureComponent } from "react";
import { Button, NavigationDrawer } from "react-md";
import { FontIcon } from "react-md";
import ContentsContainer from './../contentsContainer/ContentsContainer';
import "./courseview.css"

export default class CourseView extends PureComponent {
  constructor(props) {
    super(props);

    // Update the items so they have an onClick handler to change the current page
    this.state = {
      isEditing: false,
      renderNode: null,
      visible: false,
      key: props.courseViewModels[0] ? props.courseViewModels[0].key : "",
      hoverKey: "",
      page: props.courseViewModels[0] ? props.courseViewModels[0].primaryText : ""
    };
  }

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false, renderNode: null });
  };

  handleShow = () => {
    this.setState({
      renderNode: document.getElementById("navigation-drawer-demo")
    });
  };

  toggleEdit = () => {
      this.setState(prevState => ({
          isEditing: !prevState.isEditing
      }));
      console.log('toggle edit button'+ this.state.isEditing.toString())

  };

  render() {
    const { activeKey, hoverKey, page, renderNode } = this.state;

    this.navItems = this.props.courseViewModels.map((item) => {
      if (item.divider) {
        return item;
      }

      var rightIcon = null;
      if (item.key === hoverKey) {
        rightIcon = (
            <Button
              icon
              primary
              className='left-menu-add-button'
              onClick={() => {
                this.props.add(item);
              }}
            >
              add
          </Button>
        );
      }

      return {
        ...item,
        rightIcon: rightIcon,
        active: item.key === activeKey,
        onClick: () =>
          this.setState({
            activeKey: item.key,
            hoverKey: this.state.hoverKey,
            page: item.primaryText,
            renderNode: this.state.renderNode
          }),
        onMouseOver: () =>
          this.setState({
            activeKey: this.state.activeKey,
            hoverKey: item.key,
            page: item.primaryText,
            renderNode: this.state.renderNode
          })
      };
    });

    return (
      <div>
        <NavigationDrawer
          renderNode={renderNode}
          navItems={this.navItems}
          mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
          desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
          toolbarTitle="Slack Fundamentals"
          toolbarActions={
            <Button icon onClick={this.toggleEdit}>
              edit
            </Button>
          }
          contentId={page}
          temporaryIcon={<FontIcon>menu</FontIcon>}
          persistentIcon={
            <FontIcon
              style={{
                color: "#ffffff"
              }}
            >
              arrow_back_ios
            </FontIcon>
          }
        >

          <div className="course-section-container">
            <ContentsContainer page={page} isEditing = {this.state.isEditing}/>
          </div>

        </NavigationDrawer>

      </div>
    );
  }
}

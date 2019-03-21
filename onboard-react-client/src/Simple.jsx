/* eslint-disable react/no-array-index-key */

import React, { PureComponent } from "react";
import { Button, NavigationDrawer, SVGIcon } from "react-md";
import { ReactComponent as MenuIcon } from "./react-md-src/icons/menu.svg";
import arrowBack from "./react-md-src/icons/arrow_back.svg";
import { FontIcon } from "react-md";
import ContentsContainer from './components/contentsContainer/ContentsContainer';

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
export default class Simple extends PureComponent {
  constructor(props) {
    super(props);

    // Update the items so they have an onClick handler to change the current page
    this.state = {
      renderNode: null,
      visible: false,
      key: props.inboxListItems[0].key,
      hoverKey: "",
      page: props.inboxListItems[0].primaryText
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

  render() {
    const { activeKey, hoverKey, page, renderNode } = this.state;

    this.navItems = this.props.inboxListItems.map(item => {
      if (item.divider) {
        return item;
      }

      var rightIcon = null;
      if (item.key == hoverKey) {
        rightIcon = (
          <Button
            primary
            onClick={() => {
              this.props.addModule();
            }}
          >
            <div class="add-button">+</div>
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
            hoverKey: this.hoverKey,
            page: this.page,
            renderNode: this.renderNode
          }),
        onMouseOver: () =>
          this.setState({
            activeKey: this.activeKey,
            hoverKey: item.key,
            page: this.page,
            renderNode: this.renderNode
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
            <Button icon onClick={this.hide}>
              close
            </Button>
          }
          contentId="main-demo-content"
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
          contentClassName="md-grid"
          drawerClassName="md-drawer"
        >
        
          <ContentsContainer page={page}/>

        </NavigationDrawer>

      </div>
    );
  }
}

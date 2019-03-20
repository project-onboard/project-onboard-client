/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import { ReactComponent as MenuIcon } from './react-md-src/icons/menu.svg';
import arrowBack from './react-md-src/icons/arrow_back.svg';
import { FontIcon, Button, Paper, NavigationDrawer, SVGIcon} from 'react-md';
import ContentsContainer from './components/contentsContainer/ContentsContainer';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
export default class Simple extends PureComponent {
  constructor(props) {
    super(props);

    // Update the items so they have an onClick handler to change the current page
    this.navItems = props.inboxListItems.map((item) => {
      if (item.divider) {
        return item;
      }

      return {
        ...item,
        onClick: () => this.setPage(item.key, item.primaryText),
        onMouseOver: () => { console.log("on mouse over")},
        onHover: () => { console.log("on hover")},
      };
    });

    this.state = {
      renderNode: null,
      visible: false,
      key: props.inboxListItems[0].key,
      page: props.inboxListItems[0].primaryText,
    };
  }

  setPage = (key, page) => {
    this.navItems = this.navItems.map((item) => {
      if (item.divider) {
        return item;
      }

      return { ...item, active: item.key === key };
    });

    this.setState({ key, page });
  };

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false, renderNode: null });
  };

  handleShow = () => {
    this.setState({ renderNode: document.getElementById('navigation-drawer-demo') });
  };


  render() {
    const { visible, page, renderNode } = this.state;
    return (
      <div>
        {/* <Button raised onClick={this.show}>Open the Demo</Button>
        <DialogContainer
          id="navigation-drawer-demo"
          aria-label="Navigation Drawer Demo"
          visible={visible}
          fullPage
          focusOnMount={false}
          onShow={this.handleShow}
          onHide={this.hide}
        > */}

          <NavigationDrawer
            renderNode={renderNode}
            navItems={this.navItems}
            mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
            tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
            desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
            toolbarTitle="Slack Fundamentals"
            toolbarActions={<Button icon onClick={this.hide}>close</Button>}
            contentId="main-demo-content"
            temporaryIcon={<FontIcon>menu</FontIcon>}
            persistentIcon={<FontIcon style={{
              color: '#ffffff', 
            }}>arrow_back_ios</FontIcon>}
            contentClassName="md-grid"
            drawerClassName="md-drawer"
          >
           <ContentsContainer page={page}/>

          </NavigationDrawer>
        {/* </DialogContainer> */}
      </div>
    );
  }
}
/* eslint-disable react/no-array-index-key */

import React, { PureComponent } from "react";
import { Button, NavigationDrawer } from "react-md";
import { FontIcon } from "react-md";
import ContentsContainer from './../contentsContainer/ContentsContainer';
import "./courseview.css"
import CourseManager from "./../../managers/courseManager"
import ContentCard from "../contentsContainer/ContentsContainer";

export default class CourseView extends PureComponent {
  constructor() {
    super();
    // Update the items so they have an onClick handler to change the current page
    this.state = {
      isEditing: false,
      renderNode: null,
      visible: false,
      key: "",
      hoverKey: "",
      page: "",
      modules: []
    };

    this.courseManager = new CourseManager();
    this.courseManager.didChangeModules = (modules) => {
      this.setState({
        activeKey: this.state.activeKey,
        hoverKey: this.hoverKey,
        page: this.page,
        renderNode: this.state.renderNode,
        modules: modules
      });
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
  
  rightIconForKey(item, hoverKey) {
    if (item.key === hoverKey) {
      return (
          <Button
            icon
            primary
            className='left-menu-add-button'
            onClick={() => {this.courseManager.add(item)}}
          >
            add
        </Button>
      );
    }

    return null
  }

  saveSectionContents() {
      const sectionIndex =1;
      const moduleIndex =1;
      const contents =  [
          {
              "title":"~~~~~~~~~~",
              "type":"~~~~~~~~~~",
              "text":"~~~~~~~~~~"
          },
          {
              "title":"~~~~~~~~~~",
              "type":"~~~~~~~~~~"
          }
      ];

      this.courseManager.saveSectionContents(moduleIndex, sectionIndex, contents);
  }

  render() {
    const { activeKey, hoverKey, page, renderNode, modules } = this.state;

    const courseViewModels = modules.map(
      (courseModule, moduleIndex) => {
        const headerKey = "header" + moduleIndex
        const moduleHeader = {
          key: headerKey,
          moduleindex: moduleIndex,
          primaryText: courseModule.title,
          leftIcon: <FontIcon>school</FontIcon>,
        };

        const spaces =
          "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        const sections = courseModule.sections.map((section, sectionIndex) => {
          const sectionKey = headerKey + "contentItems" + sectionIndex

          return {
            key: sectionKey,
            moduleindex: moduleIndex,
            sectionindex: sectionIndex,
            primaryText: spaces + section.title,
          };
        });

        const allModules =  [moduleHeader, ...sections];
        return allModules
      }
    ).flat();

    const navItems = courseViewModels.map((item) => {

      return {
        ...item,
        rightIcon: this.rightIconForKey(item, hoverKey),
        active: item.key === activeKey,
        onClick: () =>
          this.setState({
            activeKey: item.key,
            hoverKey: this.state.hoverKey,
            page: item.primaryText,
            renderNode: this.state.renderNode,
            modules: this.state.modules
          }),
        onMouseOver: () =>
          this.setState({
            activeKey: this.state.activeKey,
            hoverKey: item.key,
            page: item.primaryText,
            renderNode: this.state.renderNode,
            modules: this.state.modules
          })
      };
    });

    return (
      <div>
        <NavigationDrawer
          renderNode={renderNode}
          navItems={navItems}
          mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
          desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
          toolbarTitle="Slack Fundamentals"
          toolbarActions={
          <div>
              <Button icon onClick={this.toggleEdit}>
              edit
                </Button>
              {this.state.isEditing?(<Button icon onClick={() => {this.saveSectionContents() }}>
                  save
              </Button>): null}
           </div>
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
            <ContentsContainer  saveSectionContents= { this.saveSectionContents} page={page} isEditing = {this.state.isEditing}/>
          </div>

        </NavigationDrawer>

      </div>
    );
  }
}

/* eslint-disable react/no-array-index-key */

import React, { PureComponent } from "react";
import { Button, NavigationDrawer } from "react-md";
import { FontIcon } from "react-md";
import ContentsContainer from './../contentsContainer/ContentsContainer';
import "./courseview.css"
import CourseManager from "./../../managers/courseManager"
import ContentCard from "../contentsContainer/ContentsContainer";

export default class CourseView extends PureComponent {
    constructor({match}) {
        super();

        this.state = {
            isEditing: false,
            renderNode: null,
            visible: false,
            key: "",
            hoverKey: "",
            page: "",
            modules: [],
            currentSection: 0,
            currentModule: 0,
            currentContents:[],
        };

        this.courseManager = new CourseManager(match.params.courseId);
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

  getCurrentContents = (newContents) => {
      this.setState({contents:newContents});
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
      const sectionIndex = this.state.currentSection;
      const moduleIndex = this.state.currentModule;
      this.courseManager.saveSectionContents(moduleIndex, sectionIndex, this.state.contents);
  }

  render() {
    const {isEditing, activeKey, hoverKey, page, renderNode, modules } = this.state;

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
          const sectionKey = headerKey + "section" + sectionIndex

          return {
            key: sectionKey,
            moduleindex: moduleIndex,
            sectionindex: sectionIndex,
            primaryText: spaces + section.title,
          };
        });

        return [moduleHeader, ...sections];
      }
    ).flat();

    const navItems = courseViewModels.map((item) => {
        if (item.key.includes("section")) {
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
                        modules: modules,
                        currentSection: item.sectionindex,
                        currentModule: item.moduleindex,
                        currentContents: modules[item.moduleindex].sections[item.sectionindex].contents,
                    }),
                onMouseOver: () =>
                    this.setState({
                        activeKey: this.state.activeKey,
                        hoverKey: item.key,
                        renderNode: this.state.renderNode,
                        modules: this.state.modules
                    })
            };
        } else {
            return {
                ...item,
                rightIcon: this.rightIconForKey(item, hoverKey),
                active: item.key === activeKey,
                onMouseOver: () =>
                    this.setState({
                        activeKey: this.state.activeKey,
                        hoverKey: item.key,
                        renderNode: this.state.renderNode,
                        modules: this.state.modules
                    })
            };
        }
    });

    const isEditingIcon = isEditing ? ("remove_red_eye") : ("edit")
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
              {isEditing?(<Button icon onClick={() => {this.saveSectionContents() }}>
                  save
              </Button>): null}
              <Button icon onClick={this.toggleEdit}>
              {isEditingIcon}
                </Button>
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
            <ContentsContainer  page={page}
                                isEditing = {this.state.isEditing}
                                getCurrentContents = {this.getCurrentContents}
                                contents = {this.state.currentContents}
                                sectionIndex = {this.state.currentSection}
                                moduleIndex = {this.state.currentModule}
            />
          </div>

        </NavigationDrawer>

      </div>
    );
  }
}

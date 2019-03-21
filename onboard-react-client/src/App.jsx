import React, { Component } from "react";
import "./App.css";
import CourseView from "./components/courseView/CourseView";
import { FontIcon } from "react-md";
import CourseManager from "./managers/courseManager"

class App extends Component {

  constructor() {
    super()
    this.courseManager = new CourseManager();
  }

  componentWillMount() {
    this.updateState()
  }

  updateState = () => {
    const modules = this.courseManager.allModules();
    this.setState({ modules });
  }

  addModule = () => {
    this.courseManager.addModule()
    this.updateState()
  };

  render() {
    const inboxListItems = this.state.modules.map(
      (courseModule, moduleIndex) => {
        const moduleHeader = {
          key: "header" + moduleIndex,
          primaryText: courseModule.title,
          leftIcon: <FontIcon>school</FontIcon>,
          active: false
        };

        const spaces =
          "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        const sections = courseModule.contents.map((section, sectionIndex) => {
          return {
            key: "section" + moduleIndex + "contentItems" + sectionIndex,
            primaryText: spaces + section.title,
            active: false
          };
        });

        return [moduleHeader, ...sections];
      }
    );

    return (
      <div className="App">
        {
          <CourseView
            inboxListItems={inboxListItems.flat()}
            addModule={this.addModule}
          />
        }
      </div>
    );
  }
}

export default App;

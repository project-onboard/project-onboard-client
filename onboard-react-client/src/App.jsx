import React, { Component } from "react";
import "./App.css";
import CourseView from "./components/courseView/CourseView";
import { FontIcon } from "react-md";
import CourseManager from "./managers/courseManager"

class App extends Component {

  constructor() {
    super()
    this.courseManager = new CourseManager();
    this.courseManager.didChangeModules = this.didChangeModules
  }

  componentWillMount() {
    const modules = this.courseManager.allModules();
    this.setState({ modules });
  }

  addModule = () => {
    this.courseManager.addModule()
  };

  didChangeModules = (modules) => {
    console.log("did change modules")
    this.setState({ modules });
  };

  render() {
    const courseViewModels = this.state.modules.map(
      (courseModule, moduleIndex) => {
        const moduleHeader = {
          key: "header" + moduleIndex,
          primaryText: courseModule.title,
          leftIcon: <FontIcon>school</FontIcon>,
          active: false
        };

        const spaces =
          "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        const sections = courseModule.sections.map((section, sectionIndex) => {
          return {
            key: "section" + moduleIndex + "contentItems" + sectionIndex,
            primaryText: spaces + section.title,
            active: false
          };
        });

        return [moduleHeader, ...sections];
      }
    );


    console.log("render modules", this.addModule)

    return (
      <div className="App">
        {
          <CourseView
            courseViewModels={courseViewModels.flat()}
            addModule={this.addModule}
          />
        }
      </div>
    );
  }
}

export default App;

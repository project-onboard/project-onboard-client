import React, { Component } from "react";
import "./App.css";
import Simple from "./Simple";
import { Button, FontIcon } from "react-md";

// import inboxListItems from './react-md-src/constants/inboxListItems';

class App extends Component {
  componentWillMount() {
    console.log("will mount");

    const modules = [
      {
        title: "Intro to slack",
        contents: [
          {
            type: "text",
            title: "Slack 101"
          },
          {
            type: "text",
            title: "Hello world"
          }
        ]
      },
      {
        title: "Interacting with people",
        contents: [
          {
            type: "text",
            title: "Learn to chat"
          },
          {
            type: "text",
            title: "Learn to add emojis"
          },
          {
            type: "text",
            title: "Learn to add reactions"
          },
          {
            type: "text",
            title: "Learn to make polls"
          }
        ]
      }
    ];

    this.setState({ modules });
  }

  // updateModules = newModules => {
  //   this.setState({ newModules });
  // };

  addModule = () => {
    console.log("addModule!!!");

    const newModule = {
      title: "Not titled",
      contents: [
        {
          type: "text",
          title: "Slack 202"
        }
      ]
    };

    const allModules = [...this.state.modules, newModule];
    this.setState({ modules: allModules });
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

    console.log("inbox list items ", inboxListItems.flat());

    return (
      <div className="App">
        {
          <Simple
            inboxListItems={inboxListItems.flat()}
            addModule={this.addModule}
          />
        }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Simple from './Simple'
import { FontIcon } from 'react-md';

// import inboxListItems from './react-md-src/constants/inboxListItems';

class App extends Component {
  render() {
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

    const inboxListItems = modules.map((courseModule, moduleIndex) => {
      const moduleHeader = {
      key: 'header' + moduleIndex,
      primaryText: courseModule.title,
      leftIcon: <FontIcon>school</FontIcon>,
      active: false,
    }
  
      const string =  '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
      const sections = courseModule.contents.map((section, sectionIndex) => {
        return  {
          key: 'section' + moduleIndex + 'contentItems' + sectionIndex,
          primaryText: string+ section.title,
          // leftIcon: <FontIcon>inbox</FontIcon>,
          active: false,
        }
      });
  
      return [moduleHeader, ...sections]
    });
  

    console.log("inbox list items ", inboxListItems.flat())

    return (
        <div className="App">
          { <Simple inboxListItems={inboxListItems.flat()}/> }
        </div>
    );
  }
}

export default App;

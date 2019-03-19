import React, { Component } from "react";
import logo from "./logo.svg";
import { slide as Menu } from "react-burger-menu";
import "./App.css";
import SideBar from "./components/menu/sidebar";

class App extends Component {
  render() {
    const sections = [
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

    return (
      <div id="App">
        <div id="outer-container">
          <SideBar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            sections={sections}
          />
          <div id="page-wrap">
            <h1>AppDividend</h1>
            <h2>Check out our tutorials the side menubar</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

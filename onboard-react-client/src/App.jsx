import React, { Component } from "react";
import "./App.css";
import CourseView from "./components/courseView/CourseView";

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          <CourseView/>
        }
      </div>
    );
  }
}

export default App;

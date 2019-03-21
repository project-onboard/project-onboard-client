import React, { Component } from "react";
import "./App.css";
import CourseSelectionView from "./components/courseSelectionView/CourseSelectionView";
import CourseView from "./components/courseView/CourseView";
import { HashRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={CourseSelectionView} />
          <Route path="/course/:courseId" component={CourseView} />
        </div>
      </Router>
    );
  }
}

export default App;

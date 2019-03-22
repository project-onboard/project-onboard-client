import React, { Component } from "react";
import "./App.css";
import CourseSelectionView from "./components/courseSelectionView/CourseSelectionView";
import CourseView from "./components/courseView/CourseView";
import { HashRouter as Router, Route } from "react-router-dom";
import socket from './socket'

class App extends Component {

  componentWillMount() {
    this.socket = socket
    socket.registerLeaderboardSubscriber((data) => {
      console.log("recieved socket message foe leaderboard", data)
    })
    socket.emitLeaderboardFromPublisher({ message: "this is a message from app.jsx"})
  }

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

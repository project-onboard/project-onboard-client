import React, { Component } from "react";
import "./App.css";
import CourseSelectionView from "./components/courseSelectionView/CourseSelectionView";
import CourseView from "./components/courseView/CourseView";
import LeaderboardView from "./components/leaderboardView/LeaderboardView";
import { HashRouter as Router, Route } from "react-router-dom";
import socket from './socket'

class App extends Component {

  componentWillMount() {
    this.socket = socket
    socket.registerLeaderboardSubscriber((data) => {
      console.log("received socket message for leaderboard", data)
    })
    socket.emitLeaderboardFromPublisher({ name: "Justin Goping", id: "jgop", score: 300 })
    socket.emitLeaderboardFromPublisher({ name: "Paige Sun", id: "psun", score: 600 })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={CourseSelectionView} />
          <Route path="/course/:courseId" component={CourseView} />
          <Route path="/leaderboard" component={LeaderboardView} />
        </div>
      </Router>
    );
  }
}

export default App;

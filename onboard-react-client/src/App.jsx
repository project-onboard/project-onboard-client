import React, {Component} from "react";
import "./App.css";
import CourseSelectionView from "./components/courseSelectionView/CourseSelectionView";
import CourseView from "./components/courseView/CourseView";
import LeaderboardView from "./components/leaderboardView/LeaderboardView";
import LoginView from "./components/loginView/LoginView";
import {HashRouter as Router, Route} from "react-router-dom";
import socket from './socket'

class App extends Component {
    constructor() {
        super();

        this.username = ""
    }

    handleLogin = (username) => {
        console.log("Welcome, ", username, "!")
        this.username = username
    };

    componentWillMount() {
        this.socket = socket
        socket.registerLeaderboardSubscriber((data) => {
            console.log("received socket message for leaderboard", data)
        })
    }

    // incrementUserScore() {
    //   console.log("incrementUserScore")
    //   socket.emitLeaderboardFromPublisher({ name: this.username, id: this.username })
    // }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/"
                           component={() => <LoginView handleLogin={this.handleLogin}/>}
                    />
                    <Route exact path="/courseSelect"
                           component={() => <CourseSelectionView username={this.username}/>}/>
                    <Route path="/course/:courseId"
                           component={(props) => <CourseView username={this.username} match={props.match}/>}/>
                    <Route path="/leaderboard" component={LeaderboardView}/>
                </div>
            </Router>
        );
    }
}

export default App;

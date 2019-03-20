import React, { Component } from 'react';
import { NavigationDrawer, Button, FontIcon } from 'react-md';
import logo from './logo.svg';
import './App.css';
import Simple from './Simple'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Simple />
        </div>
    );
  }
}

export default App;

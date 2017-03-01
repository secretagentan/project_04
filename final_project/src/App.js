import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar-fixed">
          <NavBar />
        </div>

        {this.props.children}

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import UploadForm from './UploadForm';
import Map from './Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="lighten-3">
            <div className="nav-wrapper">
              <a href="/" className="page-title brand-logo"> m u r a l . l a </a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#">login</a></li>
                <li><a href="#">gallery</a></li>
                <li><a href="#">about</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <UploadForm />
        <Map />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import UploadForm from './UploadForm';
import Map from './Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UploadForm />
        <Map />
      </div>
    );
  }
}

export default App;

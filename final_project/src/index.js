import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import Map from './Map';
import UploadForm from './UploadForm';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/map' component={Map} />
      <Route path='/upload' component={UploadForm} />
    </Route>
  </Router>
), document.getElementById('root'));


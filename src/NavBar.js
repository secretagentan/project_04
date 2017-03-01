import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  render() {
    return(
      <nav className="lighten-3">
        <div className="nav-wrapper">
          <span className="brand-logo center"><Link to="/">m u r a l . l a</Link></span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/map">map</Link></li>
            <li><Link to="/upload">upload</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;

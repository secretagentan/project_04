import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  render() {
    return(
      <nav className="my-nav lighten-3">
        <div className="nav-wrapper">
          <span className="brand-logo center"><Link to="/">m u r a l . l a</Link></span>
          <ul className="right">
            <li><Link to="/upload">contribute</Link></li>
            <li><Link to="/map">map</Link></li>
            <li><Link to="/gallery">gallery</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;


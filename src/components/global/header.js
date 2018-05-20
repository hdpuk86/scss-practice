import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>.header</h1>
        <ul className="navigation">
          <li><a href="#">link 1</a></li>
          <li><a href="#">link 2</a></li>
          <li><a href="#">link 3</a></li>
        </ul>
      </div>
    )
  }
}

export default Header;

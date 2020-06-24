import React, { Component } from 'react';

import { Link } from 'react-router-dom';
class NavBar extends Component {
  
  render() {
    return(
        <div>
    <nav
          className="navbar navbar-light navbar-expand-sm bg-light"
          style={{borderBottom: '1px solid black'}}
          id="navbar"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <i id="logo" className="fab fa-blogger fa-2x"></i>
              <h1 className="display-4" id="NavHead" style={{display: 'inline'}}>
                MyBlogs
              </h1>
            </a>
          </div>
              <Link   to="/admin/">Admin Panel</Link>
        </nav>
        </div>)
        
  }
}

export default NavBar
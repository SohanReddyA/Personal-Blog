import React, { Component } from 'react';

import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-light navbar-expand-sm bg-light"
          style={{ borderBottom: '1px solid black' }}
          id="navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <i id="logo" className="fab fa-blogger fa-2x"></i>
              <h1
                className="display-4"
                id="NavHead"
                style={{ display: 'inline' }}>
                MyBlogs
              </h1>
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navCollapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link to="/admin/">Admin Panel</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

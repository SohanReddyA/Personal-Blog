import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashBoard from './DashBoard';
class Admin extends Component {
  state = {
    userName: '',
    password: '',
    success: 0,
  };
  StyleForm = () => {
    return {
      padding: '100px 500px 0px',
    };
  };
  StyleButton = () => {
    return {
      margin: '0px 0px 0px',
      width: '535px',
    };
  };

  Login = () => {
    if (
      this.state.userName === this.props.userName &&
      this.state.password === this.props.password
    ) {
      this.setState({ success: 1 });
      this.render();
    }
    else window.alert("Wrong credentials");

  };
  render() {
    if (this.state.success === 0) {
      return (
        <React.Fragment>
          <form style={this.StyleForm()} action="javascript:void(0);">
            <div className="form-group">
              <label for="userName">UserName:</label>
              <input
                type="text"
                className="form-control"
                id="email"
                onChange={(e) => {
                  this.setState({ userName: e.target.value || '' });
                }}
              />
            </div>
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                onChange={(e) =>
                  this.setState({ password: e.target.value || '' })
                }
              />
            </div>
            <button
              onClick={this.Login}
              style={this.StyleButton()}
              className="btn btn-default">
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    } else {
      return (
        <Router>
          <Route exact path="/admin/">
            <DashBoard success={this.state.success} />
          </Route>
          <Route exact path="/admin/createBlog">
            <DashBoard success={this.state.success} />
          </Route>
        </Router>
      );
    }
  }
}

export default Admin;

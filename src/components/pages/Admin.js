import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashBoard from './DashBoard';
class Admin extends Component {
  state = {
    userName: '',
    password: '',
    success: 0,
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
          <form style={{marginTop:'50px'}} className="form-horizontal text-center justify-content-center" action="javascript:void(0);">
            <div className="form-group">
              <label for="userName">UserName:</label>
              <input 
                style={{display:'inline'}}
                type="text"
                className="form-control col-xs-offset-3 col-xs-6 col-md-offset-4 col-md-4 "
                id="email"
                onChange={(e) => {
                  this.setState({ userName: e.target.value || '' });
                }}
              />
            </div>
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input
                style={{display:'inline'}}
                type="password"
                className="form-control col-xs-offset-3 col-xs-6 col-md-offset-4 col-md-4"
                id="pwd"
                onChange={(e) =>
                  this.setState({ password: e.target.value || '' })
                }
              />
            </div>
            <button
              onClick={this.Login}
              className="btn btn-success">
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

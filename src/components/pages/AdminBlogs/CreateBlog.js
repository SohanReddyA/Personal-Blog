import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CreateBlog extends Component {
    
  state = {
    title: "",
    body: "",
    imgUrl: "",
  };
  render() {
    return (
      <div className="container-fluid">
        <form action="javascript:void(0);">
          <div className="form-group">
            <label for="Title">Title:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                this.setState({ title: e.target.value || '' });
              }}
            />
          </div>
          <div className="form-group">
            <label for="ImgUrl">Image Url:</label>
            <input
              type="text"
              className="form-control"              
              onChange={(e) =>
                this.setState({ imgUrl: e.target.value || '' })
              }
            />
          </div>
          <div className="form-group">
            <label for="Body">Body:</label>
            <textarea
              className="form-control"
              name="Text1"
              cols="100"
              rows="25"              
              onChange={(e) =>
                this.setState({ body: e.target.value })
              }></textarea>
          </div>
        <Link to="/admin/">
          <button
            onClick={this.props.create.bind(
              this,
              this.state.title,
              this.state.body,
              this.state.imgUrl
            )}
            className="btn btn-default">
            Save
          </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreateBlog;

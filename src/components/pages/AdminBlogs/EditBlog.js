import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class EditBlog extends Component {
  state = {
    title: this.props.blog.title,
    body: this.props.blog.body,
    imgUrl: this.props.blog.imgUrl,
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
              value={this.state.title}
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
              value={this.state.imgUrl}
              onChange={(e) => this.setState({ imgUrl: e.target.value || '' })}
            />
          </div>
          <div className="form-group">
            <label for="Body">Body:</label>
            <textarea
              className="form-control"
              name="Text1"
              cols="100"
              rows="25"
              value={this.state.body}
              onChange={(e) =>
                this.setState({ body: e.target.value })
              }></textarea>
          </div>
          <Link to="/admin/blogData">
            <div className="text-center" style={{paddingBottom:'40px'}}>
              <button
                onClick={this.props.edit.bind(
                  this,
                  this.state.title,
                  this.state.body,
                  this.state.imgUrl
                )}
                className="btn btn-success">
                Save
              </button>
            </div>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditBlog;

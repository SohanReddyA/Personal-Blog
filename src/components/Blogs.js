import React, { Component } from 'react';
import Blog from './Blog';
import PropTypes from 'prop-types';

class Blogs extends Component {
  
  render() {
    if (this.props.loading) {
      return <h2>Loading...</h2>;
    }
    return this.props.blogs.map((blog) => (
      <Blog key={blog.id} blog={blog} blogId={this.props.blogId}/>
    ));
  }
}

export default Blogs;
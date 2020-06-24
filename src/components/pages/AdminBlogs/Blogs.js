import React, { Component } from 'react';
import Blog from './Blog';

class Blogs extends Component {
  render() {
    console.log('Loading-', this.props.loading);
    if (this.props.loading) {
      return <h2>Loading...</h2>;
    }
    return this.props.blogs.map((blog) => (
      <Blog
        key={blog.id}
        blog={blog}
        blogId={this.props.blogId}
        delete={this.props.delete}
      />
    ));
  }
}

export default Blogs;

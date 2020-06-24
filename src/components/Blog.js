import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Blog extends Component {
  componentDidMount = (props) => {
    console.log(this.props.blog);
  };
  imgStyle = () => {
    return {
      width: '500px',
    };
  };
  blogStyle = () => {
    return {
      backgroundColor: '#d9d9d9',
      margin: '10px',
      padding: '10px',
      border: '1px solid black',
    };
  };
  render() {
    const { _id, title, body, imgUrl } = this.props.blog;
    console.log('id=', _id);
    return (
      <div className="container-fluid" style={this.blogStyle()}>
        <h1
          className="display-4"
          style={{
            textAlign: 'center',
          }}>
          {title}
        </h1>
        <div style={{
          display:'flex',
      justifyContent: 'center',
      alignItems: 'center'}}>
        <img
          src={imgUrl}
          style={this.imgStyle()}
          alt="No Pic"
        /></div>
        <p style={{fontSize:"25px",fontStyle:'italic'}}>{body}...</p>
        <Link to="/blogData">
          <button
            className="btn btn-primary"
            onClick={this.props.blogId.bind(this, _id)}>
            Read More
          </button>
        </Link>
      </div>
    );
  }
}


export default Blog;

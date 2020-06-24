import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class BlogData extends Component {
  state = {
    like: 1,
    comment: '',
  };
  Like = () => {
    console.log('liking');
    if (this.state.like == 1) {
      this.setState({
        like: -1,
      });
    } else {
      this.setState({
        like: 1,
      });
    }
  };
  imgStyle = () => {
    return {
      minWidth: '60%',
      maxWidth: '60%',
    };
  };
  blogStyle = () => {
    return {
      textAlign:'center',
      width:'90%',
      backgroundColor:'white',
      marginTop:'30px'
    };
  };
  render() {
    if (this.props.loading) {
      return <h2>Loading...</h2>;
    }
    const {
      title,
      body,
      imgUrl,
      comments,
      likes,
      created,
      lastUpdated,
    } = this.props.blog;
    return (
      <div className="container-fluid" style={this.blogStyle()}>
        <div className="container-fluid">
          <h1 className="display-4" style={{ textAlign: 'center' }}>
            {title}
          </h1>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img src={imgUrl} style={this.imgStyle()} alt="No Pic" />
          </div>
          <pre
            style={{
              paddingLeft: '25px',
              paddingRight: '25px',
              maxWidth: '100%',
              overflowWrap: 'break-word',
              overflow: 'ellipsis',
              whiteSpace: 'pre-wrap',
            }}>
            {body}
          </pre>
          <div>
            <button
              onClick={() => {
                this.props.setLike(this.state.like);
                this.Like();
              }}>
              {this.state.like == 1 ? (
                <i class="far fa-thumbs-up"></i>
              ) : (
                <i class="fas fa-thumbs-up"></i>
              )}
              {likes}
            </button>
            <p>Created on:{created}</p>
            <div>
              {lastUpdated != '' ? (
                <p>Last Updated on {lastUpdated}</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
        <div>
          <form style={{ width: '100%',backgroundColor:'white' }} action="javascript:void(0);">
            <div className="form-group">
              <label for="userName" style={{ paddingRight: '90%' }}>
                Enter a Comment:
              </label>
              <textarea
                style={{width:'70%'}}
                name="Text1"
                rows="5"
                placeholder="Enter comment here...."
                onChange={(e) =>
                  this.setState({ comment: e.target.value })
                }></textarea>
            </div>
            <button
              onClick={this.props.comment.bind(this, this.state.comment)}
              className="btn btn-success">
              Submit
            </button>
          </form>
          <h1>Comments:</h1>
          <div style={{paddingBottom:'20px',marginBottom:'20px'}}>
          {comments.map((number) => (
            <p style={{padding:'25px',border:'2px solid black'}}>{number}</p>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogData;

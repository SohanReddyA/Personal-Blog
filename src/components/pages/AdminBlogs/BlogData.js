import React, { Component } from 'react';
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
      minWidth: '480px',
      maxWidth: '900px',
    };
  };
  blogStyle = () => {
    return {
      margin: '10px',
      padding: '10px',
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
        <Link to="/admin/">
          <button
            className="btn btn-primary"
            style={{ float: 'right',marginLeft:'15px' }}
            onClick={this.props.delete}>
            <i class="fas fa-trash"></i>
          </button>
        </Link>
        <Link to="/admin/editBlog">
          <button
            className="btn btn-primary"
            style={{ float: 'right',marginLeft:'15px' }}>
            <i class="far fa-edit"></i>
          </button>
        </Link>
        <div className="container-fluid" style={this.blogStyle()}>
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
              fontWeight: 'lighter',
              fontSize: '30px',
              paddingLeft: '30px',
              paddingRight: '30px',
              maxWidth: '80%',
              overflowWrap: 'break-word',
              overflow: 'ellipsis',
              whiteSpace: 'pre-wrap',
            }}>
            {body}
          </pre>
          <div>
            <i class="far fa-thumbs-up"></i>
            {likes}
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
        <div style={{marginLeft:'30px'}}>
          <h1>Comments:</h1>
          {comments.map((number, i) => (
            <div>
              <div>
                {number}
                <button
                  style={{ display: 'inline', marginLeft: '30px' }}
                  onClick={this.props.comment.bind(this, i + 1)}>
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlogData;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Blogs from './AdminBlogs/Blogs';
import Pagination from './AdminBlogs/Pagination';
import BlogData from './AdminBlogs/BlogData';
import EditBlog from './AdminBlogs/EditBlog';
import CreateBlog from './AdminBlogs/CreateBlog';
import axios from 'axios';
class DashBoard extends Component {
  state = {
    blogs: [],
    currentPage: 1,
    blogsPerPage: 10,
    totalBlogs: 0,
    loading: false,
    loadingBlog: false,
    userName: '',
    password: '',
    blogId: 0,
  };
  style=() =>{
    return{
      
    }
  }
  componentWillMount() {
    console.log('Getting Blogs');
    this.getBlogs();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage != prevState.currentPage) this.getBlogs();
  }
  getBlogs = async () => {
    console.log('Getting Blogs');
    this.setState({ loading: true });
    let res = await axios.get(
      'https://blogdatabase0101.herokuapp.com/page/' + this.state.currentPage
    );
    this.setState({
      blogs: res.data.blogs,
      totalBlogs: res.data.count,
      loading: false,
    });
  };
  getBlog = async (id) => {
    this.setState({ loadingBlog: true });
    let res = await axios.get('https://blogdatabase0101.herokuapp.com/' + id);
    console.log('LLikes=', res.data.likes);
    this.setState({
      blog: res.data,
      loadingBlog: false,
    });
  };
  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };
  setId = (id) => {
    this.setState({ blogId: id });
    this.getBlog(id);
  };
  create = (title,body,imgUrl)=>{
    console.log("title=",title)
    console.log("body=",body)
    console.log("imgUrl=",imgUrl)
    axios
      .post('https://blogdatabase0101.herokuapp.com/',
      {
        "title":title,
        "body":body,
        "imgUrl":imgUrl
      }).then((res)=>{
        console.log(res.data)
        this.getBlogs();
      });
  }
  delete = (id) => {
    axios.delete('https://blogdatabase0101.herokuapp.com/' + id).then((res) => {
      this.getBlogs();
    });
  };
  deleteBlog = () => {
    axios
      .delete('https://blogdatabase0101.herokuapp.com/' + this.state.blogId)
      .then((res) => {
        this.getBlogs();
      });
  };
  editBlog = (title, body, imgUrl) => {
    axios
      .patch('https://blogdatabase0101.herokuapp.com/' + this.state.blogId, [
        {
          propName: 'title',
          value: '' + title,
        },
        {
          propName: 'body',
          value: '' + body,
        },
        {
          propName: 'imgUrl',
          value: '' + imgUrl,
        },
      ])
      .then((res) => {
        this.getBlog(this.state.blogId);
      });
  };
  comment = (comment) => {
    console.log('commented');
    console.log(comment);
    axios
      .put('https://blogdatabase0101.herokuapp.com/' + this.state.blogId, [
        { propName: 'comments', value: { id: '' + comment } },
      ])
      .then((res) => {
        this.getBlog(this.state.blogId);
      });
  };
  edit;
  render() {
    if (this.state.blogs == []) this.getBlogs();
    return (
      <Router style={this.style()}>
        <Route exact path="/admin/">
          <Link to="/admin/createBlog">
            <div className="text-center">
            <button
              className="btn btn-warning"
              style={{marginTop:'10px',textAlign: 'center', height: '60px' }}>
              Create a new Blog
            </button>
            </div>
          </Link>
          <div className="container mt-5">
            <Blogs
              blogs={this.state.blogs}
              loading={this.state.loading}
              blogId={this.setId}
              delete={this.delete}
            />
            <Pagination
              blogsPerPage={this.state.blogsPerPage}
              totalBlogs={this.state.totalBlogs}
              paginate={this.paginate}
            />
          </div>
        </Route>
        <Route exact path="/admin/#">
          <Link to="/admin/createBlog">
            <div className="text-center">
            <button
              className="btn btn-warning"
              style={{marginTop:'10px',textAlign: 'center', height: '60px' }}>
              Create a new Blog
            </button>
            </div>
          </Link>
          <div className="container mt-5">
            <Blogs
              blogs={this.state.blogs}
              loading={this.state.loading}
              blogId={this.setId}
              delete={this.delete}
            />
            <Pagination
              blogsPerPage={this.state.blogsPerPage}
              totalBlogs={this.state.totalBlogs}
              paginate={this.paginate}
            />
          </div>
        </Route>
        <Route exact path="/admin/blogData">
          <Link to="/admin/createBlog">
            <div className="text-center">
            <button
              className="btn btn-warning"
              style={{marginTop:'10px',textAlign: 'center', height: '60px' }}>
              Create a new Blog
            </button>
            </div>
          </Link>
          <BlogData
            loading={this.state.loadingBlog}
            blog={this.state.blog}
            comment={this.comment}
            delete={this.deleteBlog}
          />
        </Route>
        <Route exact path="/admin/editBlog">
          <EditBlog blog={this.state.blog} edit={this.editBlog}></EditBlog>
        </Route>
        <Route exact path="/admin/createBlog">
          <CreateBlog
          create={this.create}></CreateBlog>
        </Route>
      </Router>
    );
  }
}

export default DashBoard;

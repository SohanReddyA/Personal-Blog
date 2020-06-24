import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import Admin from './components/pages/Admin';
import NavBar from './components/NavBar'
import BlogData from './components/pages/BlogData';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    blogs: [],
    currentPage: 1,
    blogsPerPage: 10,
    totalBlogs: 0,
    loading: false,
    loadingBlog:false,
    userName: '',
    password: '',
    blogId: 0,
  };
  componentDidMount() {
    this.getBlogs();
    this.getAdmin();
  }
  componentDidUpdate(prevProps, prevState) {    
    if (this.state.currentPage != prevState.currentPage) this.getBlogs();
  }
  getAdmin = async () => {
    let res = await axios.get('https://blogdatabase0101.herokuapp.com/Login');
    console.log(res.data);
    this.setState({
      userName: res.data.doc.User,
      password: res.data.doc.Password,
    });
  };
  getBlogs = async () => {
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
    let res = await axios.get(
      'https://blogdatabase0101.herokuapp.com/' + id
    );
    console.log("LLikes=",res.data.likes)
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
    this.setState({blogId:id})
    this.getBlog(id);
  };
  setLike = (like) => {
    console.log('Liked')
    console.log(like)
    axios.put('https://blogdatabase0101.herokuapp.com/' + this.state.blogId,[{"propName":"likes","value":""+like}]).then((res)=>{this.getBlog(this.state.blogId)});    
  }
  comment = (comment) => {
    console.log('commented')
    console.log(comment)
    axios.put('https://blogdatabase0101.herokuapp.com/' + this.state.blogId,[{"propName":"comments","value":{"value":""+comment}}]).then((res)=>{this.getBlog(this.state.blogId)});
  }
  render() {
    return (
      
      <Router>
      <NavBar></NavBar>
        <Route exact path="/">
          <div className="container mt-5">
            <Blogs
              blogs={this.state.blogs}
              loading={this.state.loading}
              blogId={this.setId}
            />
            <Pagination
              blogsPerPage={this.state.blogsPerPage}
              totalBlogs={this.state.totalBlogs}
              paginate={this.paginate}
            />
          </div>
        </Route>
        <Route exact path="/#">
          <div className="container mt-5">
            <Blogs
              blogs={this.state.blogs}
              loading={this.state.loading}
              blogId={this.setId}
            />
            <Pagination
              blogsPerPage={this.state.blogsPerPage}
              totalBlogs={this.state.totalBlogs}
              paginate={this.paginate}
            />
          </div>
        </Route>
        <Route path="/admin/">
          <Admin
            userName={this.state.userName}
            password={this.state.password}
          />
        </Route>
        <Route path="/blogData">
          <BlogData 
              loading={this.state.loadingBlog}
              blog={this.state.blog}
              setLike={this.setLike}
              comment={this.comment}
              back={this.back}/>
        </Route>
      </Router>
    );
  }
}

export default App;

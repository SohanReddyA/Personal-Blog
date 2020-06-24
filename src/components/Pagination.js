import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const pageNumbers = [];

    for (
      let i = 1;
      i <= Math.ceil(this.props.totalBlogs / this.props.blogsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <ul className="pagination" style={{justifyContent:"center"}}>
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={this.props.paginate.bind(this,number)} href="#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Pagination;

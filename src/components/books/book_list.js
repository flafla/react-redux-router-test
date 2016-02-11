import React, { Component } from 'react';
import { Link } from 'react-router'

export default class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.id} className='nav-item'>
          <Link to={`/books/${book.id}`} className='nav-link' activeClassName='active'>{book.title}</Link>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className='col-sm-2 nav nav-pills nav-stacked'>
        {this.renderList()}
      </ul>
    )
  }
}


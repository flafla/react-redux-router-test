import React from 'react';
import { Component } from 'react';

import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

import BookList from '../components/books/book_list'
import BookDetail from '../components/books/book_detail'
import _ from 'underscore'

class Books extends Component {
  render() {
    let book = _.find(this.props.books, { id: +this.props.params.id })
    return (
      <div>
        <BookList books={this.props.books} />
        <BookDetail book={book} />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

function mapStateToProps (state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);

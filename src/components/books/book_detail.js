import React, { Component } from 'react';

export default (props) => {
  if (!props.book) {
    return <div>Select a book to get started!</div>
  }
  return (
    <div className='col-sm-8'>
      <h3>Details for:</h3>
      <div>{props.book.title}</div>
    </div>
  )
}

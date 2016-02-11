import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';
import { routeReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  routing: routeReducer,
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;

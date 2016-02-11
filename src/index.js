import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistory } from 'react-router-redux'

import Layout from './components/Layout';
import Books from './pages/Books';
import Foo from './pages/Foo';
import Bar from './pages/Bar';
import reducer from './reducers/index';

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)
const store = createStoreWithMiddleware(reducer)

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <Route path="books(/:id)" component={Books}/>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

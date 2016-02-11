import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

function App({ push, children }) {
  return (
    <div>
      <nav className="navbar navbar-full navbar-dark bg-inverse">
        <a className="navbar-brand" href="/">Demo</a>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/books" className="nav-link" activeClassName='active'>Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/foo" className="nav-link" activeClassName='active'>Foo</Link>
          </li>
          <li className="nav-item">
            <Link to="/bar" className="nav-link" activeClassName='active'>Bar</Link>
          </li>
        </ul>
      </nav>
      <div className='container' style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}

export default connect(
  null,
  routeActions
)(App)

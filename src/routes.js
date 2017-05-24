import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'

const loadApp = (location, callback) => require.ensure(
  [],
  require => callback(null, require('./components/App').default),
  'App'
)

const loadHome = (location, callback) => require.ensure(
  [],
  require => callback(null, require('./pages/Home').default),
  'Home'
)

export default (
  <Router>
    <Route getComponent={loadApp}>
      <Route path='/'>
        <IndexRoute getComponent={loadHome} />
      </Route>
    </Route>
  </Router>
)

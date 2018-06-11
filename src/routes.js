import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'

const loadApp = (location, callback) =>
  import(/* webpackChunkName: "App" */ './components/App').then(component =>
    callback(null, component.default)
  )
const loadHome = (location, callback) =>
  import(/* webpackChunkName: "Home" */ './pages/Home').then(component =>
    callback(null, component.default)
  )

const loadList = (location, callback) =>
  import(/* webpackChunkName: "List" */ './pages/List').then(component =>
    callback(null, component.default)
  )

const loadDetail = (location, callback) =>
  import(/* webpackChunkName: "Detail" */ './pages/Detail').then(component =>
    callback(null, component.default)
  )

export default (
  <Router>
    <Route getComponent={loadApp}>
      <Route path="/">
        <IndexRoute getComponent={loadHome} />
        <Route path="people" getComponent={loadList} />
        <Route path="person/:id" getComponent={loadDetail} />
      </Route>
    </Route>
  </Router>
)

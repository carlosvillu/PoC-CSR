/* eslint no-console:0 */
if (!window.Promise) window.Promise = require('promise-polyfill')
import 'unfetch/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import {AppContainer} from 'react-hot-loader'
import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import routes from './routes'
import browserHistory from 'react-router/lib/browserHistory'

import App from './components/App'
import './app.scss'

const render = Component => match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
  if (error) { console.error({error}) }

  ReactDOM.render(
    <AppContainer>
      <Router {...renderProps} />
    </AppContainer>,
    document.getElementById('root')
  )
})

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default
    render(NewApp)
  })
}

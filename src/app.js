/* eslint no-console:0 */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import {AppContainer} from 'react-hot-loader'
import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import routes from './routes'
import browserHistory from 'react-router/lib/browserHistory'

import {register} from '@s-ui/bundler/registerServiceWorker'

import App from './components/App'
import './app.scss'

const render = Component =>
  match(
    {routes, history: browserHistory},
    (error, redirectLocation, renderProps) => {
      if (error) {
        console.error({error})
      }

      ReactDOM.render(
        <AppContainer>
          <Router {...renderProps} />
        </AppContainer>,
        document.getElementById('root')
      )
    }
  )

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default
    render(NewApp)
  })
}

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()

import Home from './component'

import withState from 'recompose/withState'
import lifecycle from 'recompose/lifecycle'
import compose from 'recompose/compose'

export default compose(
  withState('people', 'setPeople'),
  lifecycle({
    componentDidMount () {
      window.fetch(window.localStorage.lastSearch)
        .then(resp => resp.json())
        .then(people => this.props.setPeople(people))
    }
  })
)(Home)

import Home from './component'
import axios from 'axios'

import withState from 'recompose/withState'
import lifecycle from 'recompose/lifecycle'
import compose from 'recompose/compose'

export default compose(
  withState('people', 'setPeople'),
  lifecycle({
    componentDidMount() {
      axios.get(window.localStorage.lastSearch).then(resp => {
        this.props.setPeople(resp.data)
      })
    }
  })
)(Home)

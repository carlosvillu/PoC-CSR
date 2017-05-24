import lifecycle from 'recompose/lifecycle'
import withState from 'recompose/withState'
import compose from 'recompose/compose'

import Clock from './component'

export default compose(
  withState('timestamp', 'setTimeStamp', 0),
  lifecycle({
    componentDidMount () {
      const {timestamp, setTimeStamp} = this.props
      setTimeout(() => setTimeStamp(timestamp + 1), 1000)
    },
    componentWillReceiveProps ({timestamp, setTimeStamp}) {
      setTimeout(() => setTimeStamp(timestamp + 1), 1000)
    }
  })
)(Clock)

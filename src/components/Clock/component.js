import React from 'react'
import PropTypes from 'prop-types'

const Clock = ({timestamp}) => (
  <p className="Clock">
    {timestamp}
    <i> secs.</i>
  </p>
)

Clock.displayName = 'Clock'
Clock.propTypes = {
  timestamp: PropTypes.number
}

export default Clock

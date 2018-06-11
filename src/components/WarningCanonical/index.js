import WarningCanonical from './component'

import branch from 'recompose/branch'
import renderNothing from 'recompose/renderNothing'

export default branch(({id}) => id !== 1, renderNothing)(WarningCanonical)

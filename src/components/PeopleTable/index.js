import PeopleTable from './component'
import branch from 'recompose/branch'
import renderComponent from 'recompose/renderComponent'

import Loading from '../Loading'

export default branch(
  ({people}) => people === undefined,
  renderComponent(Loading)
)(PeopleTable)

import Detail from './component'
import axios from 'axios'

import withState from 'recompose/withState'
import withProps from 'recompose/withProps'
import flattenProp from 'recompose/flattenProp'
import lifecycle from 'recompose/lifecycle'
import branch from 'recompose/branch'
import renderComponent from 'recompose/renderComponent'
import compose from 'recompose/compose'

import Loading from '../../components/Loading'

export default compose(
  withState('person', 'setPerson'),
  lifecycle({
    componentDidMount () {
      axios.get(`https://us-central1-poc-csr.cloudfunctions.net/people?id=${this.props.params.id}`)
        .then(resp => {
          const [person] = resp.data
          this.props.setPerson(person)
        })
    }
  }),
  branch(
    ({person}) => person === undefined,
    renderComponent(Loading)
  ),
  flattenProp('person'),
  withProps(ownerProps => ({
    canonical: `https://poccsr.ovh/person/${ownerProps.id !== 1 ? ownerProps.id : 3}`
  }))
)(Detail)

/* eslint no-console:0 no-nested-ternary:0 */
/* eslint operator-linebreak:0 */

import List from './component'
import axios from 'axios'

import withState from 'recompose/withState'
import withProps from 'recompose/withProps'
import lifecycle from 'recompose/lifecycle'
import compose from 'recompose/compose'

const END_POINT = 'https://us-central1-poc-csr.cloudfunctions.net/people'
const qs = ({id, tag}) => id !== undefined ? `?id=${id}` :
                          tag !== undefined ? `?tag=${tag}` :
                          ''
const fetch = ({component, query}) =>
  axios.get(`${END_POINT}${qs(query)}`)
    .then(resp => {
      const people = resp.data
      component.props.setPeople(people)
      window.localStorage.setItem('lastSearch', `${END_POINT}${qs(query)}`)
    })

export default compose(
  withState('people', 'setPeople'),
  lifecycle({
    componentDidMount () {
      fetch({component: this, query: this.props.location.query})
    },
    componentWillReceiveProps (nextProps) {
      const {id, tag} = this.props.location.query
      const {id: nextId, tag: nextTag} = nextProps.location.query

      if (id === nextId && tag === nextTag) { return null }

      nextProps.setPeople(undefined)
      fetch({component: this, query: nextProps.location.query})
    }
  }),
  withProps(ownerProps => ({canonical: `https://poccsr.ovh/people${qs(ownerProps.location.query)}`}))
)(List)

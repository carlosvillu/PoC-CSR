/* eslint no-console:0 */
import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import Link from 'react-router/lib/Link'

import PeopleTable from '../../components/PeopleTable'

// https://github.com/SUI-Components/SUIStudio/blob/master/src/components/style/index.js
// import(/* webpackChunkName: "ListStyles" */ './index.scss').then(c => console.log(c.toString()))

const List = ({people, canonical}) => {
  return (
    <div className='List'>
      <Helmet>
        <title>Las 5 personas de la prueba de indexación de JS</title>
        <meta name='description' content='Estas son las 5 personas involucradas en la prueba de indexación de JS o al menos algunos de ellos lo están y otros sólo están de relleno.' />
        <link rel='canonical' href={canonical} />
      </Helmet>
      <h1>List</h1>
      <h2>Breadcrumb</h2>
      <Link to='/'>Prueba Indexación JS (a home)</Link>
      <p>Personas de la prueba</p>
      <h2>Filters</h2>
      <Link className='List-Filter' to='/people'>All</Link>
      <Link className='List-Filter' to='/people?tag=developer'>Developers</Link>
      <Link className='List-Filter' to='/people?tag=seo'>SEO</Link>
      <Link className='List-Filter' to='/people?tag=moreno'>Morenos</Link>
      <Link className='List-Filter' to='/people?tag=castaño'>Castaños</Link>
      <h2>Personas</h2>
      <PeopleTable people={people} />
    </div>
  )
}

List.displayName = 'List'
List.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    bio: PropTypes.string,
    id: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string)
  })),
  canonical: PropTypes.string
}

export default List

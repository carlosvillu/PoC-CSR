import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import Link from 'react-router/lib/Link'
import WarningCanonical from '../../components/WarningCanonical'

const Detail = ({id, name, avatar, bio, tags, canonical}) => {
  return (
    <div className='Detail'>
      <Helmet>
        <title>{`${name} es una persona inquieta`}</title>
        <meta name='description' content={`${name} es una persona inquieta. ${bio}`} />
        <link rel='canonical' href={canonical} />
      </Helmet>
      <h1>{name}</h1>
      <WarningCanonical id={id} />
      <h2>BreadCrumb</h2>
      <Link className='Detail-BreadCrumb' to='/'>Prueba Indexación JS (a home)</Link>
      <Link className='Detail-BreadCrumb' to='/people'>Las 5 personas de la prueba</Link>
      <p className='Detail-BreadCrumb'>{name}</p>
      <h2>Tags</h2>
      {tags.map(tag => <Link className='Detail-Tag' key={tag} to={`/people?tag=${tag}`}>{tag}</Link>)}
      <h2>Foto</h2>
      <img width='300' height='300' src={avatar} />
      <h2>Bio</h2>
      <p>{bio}</p>
    </div>
  )
}

Detail.displayName = 'Detail'
Detail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  bio: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  canonical: PropTypes.string
}

export default Detail

import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const PeopleTable = ({people}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Bio</th>
        </tr>
      </thead>
      <tbody>
        {people.map(({bio, avatar, name, id}) => (
          <tr key={id}>
            <td>
              <Link to={`/person/${id}`}>
                <img width="30" height="30" src={avatar} />
              </Link>
            </td>
            <td>{name}</td>
            <td>{bio.substring(0, 50)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

PeopleTable.displayName = 'PeopleTable'
PeopleTable.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      bio: PropTypes.string,
      id: PropTypes.number,
      tags: PropTypes.arrayOf(PropTypes.string)
    })
  )
}

export default PeopleTable

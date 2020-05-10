import React, { useState } from 'react'
import { withSearchContextStore } from '../../context/SearchContextStore'
import { compose } from 'redux'

const ImagesList = ({ searchContext }) => {

  const [list] = useState([
    { name: 'Krystian' },
    { name: 'Mateusz' },
    { name: 'Paweł' }
  ])

  const renderList = () => list.filter(({ name }) => name.includes(searchContext.searchedValue))
    .map(({ name }, idx) => <div key={idx}>{name}</div>)

  return (
    <div>
      <input
        value={searchContext.searchedValue}
        onChange={e => searchContext.onChangeSerachedValue(e.target.value)}
      />
      {renderList()}
    </div>
  )
}

export default compose(
  withSearchContextStore
)(ImagesList)

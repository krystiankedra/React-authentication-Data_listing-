import React from 'react'
import { withSearchContextStore } from '../../../context/SearchContextStore'

const UsersSearch = ({ searchContext }) => (
  <input value={searchContext.searchedValue} onChange={(e) => searchContext.onChangeSerachedValue(e.target.value)} />
)

export default withSearchContextStore(UsersSearch)

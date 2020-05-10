import React, { createContext, useState } from 'react'

const { Provider, Consumer } = createContext()

export const SearchContextStore = ({ children }) => {

  const [searchedValue, setSearchedValue] = useState('')

  const onChangeSerachedValue = value => setSearchedValue(value)

  return (
    <Provider value={{ searchedValue, onChangeSerachedValue }}>
      {children}
    </Provider>
  )
}

export const withSearchContextStore = Component => props => (
  <Consumer>
    {context => <Component {...props} searchContext={context} />}
  </Consumer>
)

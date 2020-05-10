import React, { Component } from 'react'
import ImagesList from '../ImagesList/ImagesList'
import { SearchContextStore } from '../../context/SearchContextStore'

class ImagesContainer extends Component {
  render() {
    return (
      <SearchContextStore>
        <ImagesList />
      </SearchContextStore>
    )
  }
}

export default ImagesContainer

import React from 'react'
import { useSelector } from 'react-redux'
import SearchProduct from './SearchProducts'

const Search = () => {
  const search = useSelector(search => search?.search?.search)
  return (
    <div className='home'>
      <div className="container">
        <div className="home__list">
          {
            search?.map((search, index) => <SearchProduct search={search} index={index} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Search
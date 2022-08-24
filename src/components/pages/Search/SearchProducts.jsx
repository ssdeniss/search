import React from 'react'

const SearchProduct = ({search, index}) => {
  return (
    <div className='product' key={index}>
        <div className="product__image">
            <img src={search?.image} alt="" />
        </div>
        <div className="product__info">
            <div className="product__name">{search?.title}</div>
            <div className="profuct__price">{search?.price}</div>
        </div>
    </div>
  )
}

export default SearchProduct
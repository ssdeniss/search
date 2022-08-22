import React from 'react'

const Product = ({product, index}) => {
  return (
    <div className='product' key={index}>
        <div className="product__image">
            <img src={product?.image} alt="" />
        </div>
        <div className="product__info">
            <div className="product__name">{product?.title}</div>
            <div className="profuct__price">{product?.price}</div>
        </div>
    </div>
  )
}

export default Product
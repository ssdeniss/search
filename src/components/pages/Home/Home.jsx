import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../../Product/Product'

const Home = () => {
    const product = useSelector(product => product?.product?.products?.data)
    return (
        <div className='home'>
            <div className="container">
                <div className="home__list">
                {
                    product?.map((product, index) => <Product product={product} index={index} />)
                }
                </div>
            </div>
        </div>
    )
}

export default Home
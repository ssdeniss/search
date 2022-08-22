import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import { setProduct } from './ProductReducer'

const Data = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        fetchProducts()
    }, [])
    useEffect(() => {
        dispatch(setProduct(products))
    }, [products])
    const fetchProducts = async () => {
        setLoading(true)
        setError('')
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response)
        setLoading(false)
    }

    return (
        <>
            {loading &&
                <div className="loader">
                    <BallTriangle
                        height="80"
                        width="80"
                        color='green'
                    />
                </div>
            }
        </>
    )
}

export default Data
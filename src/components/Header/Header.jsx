import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchItems } from '../../store/reducer/SearchReducer'

const Header = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const products = useSelector(products => products?.product?.products?.data)
    const searchItems = useSelector(search => search?.search)
    const [addedProducts, setAddedProducts] = useState(products)
    const [search, setSearch] = useState('')
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const filterProducts = (searchProducts, listOfProducts) => {
        if (!searchProducts) {
            return listOfProducts
        }
        else {

            return listOfProducts.filter(({ title }) => title.toLowerCase().includes(searchProducts.toLowerCase()))
        }
    }
    useEffect((e) => {
        document.onkeydown = (evt) => {
            evt = evt || window.event;
            if (evt.keyCode === 13 && search.length > 2) {
                const debounce = setTimeout(() => {
                    const filteredProducts = filterProducts(search, products)
                    setAddedProducts(filteredProducts)
                    console.log(addedProducts);
                    dispatch(setSearchItems(addedProducts))
                }, 300)
                if (searchItems) {
                    let path = `search`;
                    navigate(path);
                }
                return () => clearTimeout(debounce)
            }
        };
    }, [search])

    return (
        <header className='header'>
            <div className="container">
                <div className="header__content">
                    <div className="header__logo">LOGO</div>
                    <div className="header__search">
                        <input type="text" className="header__search-input" value={search} onChange={handleSearch} />
                    </div>
                    <div className="header__links">
                        <div className="header__links-item">Cart</div>
                        <div className="header__links-item">Favorite</div>
                        <div className="header__links-item">Contact</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
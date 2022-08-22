import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <div className="header__content">
                <div className="header__logo">LOGO</div>
                <div className="header__search">
                    <input type="text" className="header__search-input" />
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
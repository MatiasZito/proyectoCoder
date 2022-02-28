import React from 'react'
import CartWidget from './CartWidget'
import Nav from './Nav'

const NavBar = () => {
    return (
        <header className="header">
            <h1 className="header__lista">Tienda de tatuajes</h1>
        <CartWidget/>
        <Nav/>
        </header>
        
    )
}

export default NavBar

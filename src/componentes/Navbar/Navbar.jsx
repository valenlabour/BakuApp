import React from 'react';
import estilos from './navbar.module.css';
import Logo from '../../img/header/logo_baku.png'
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className={estilos.navbar}>
            <div className={estilos.container}>
                <a href='index.html'>
                    <img src={Logo} alt="Bakú" />
                </a>
                <ul className={estilos.nav}>
                    <li className={estilos.navItem}>Inicio</li>
                    <li className={estilos.navItem}>AllShop</li>
                    <li className={estilos.navItem}>Preguntas Frecuentes</li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;
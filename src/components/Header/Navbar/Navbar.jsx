import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link className='logo-header' to='/'>
                    <img src="https://res.cloudinary.com/dckckats5/image/upload/v1667389064/baku/logos/baku_logo_mfmceq.png" alt="Bakú" />
                </Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categoria/remeras">Remeras</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categoria/buzos">Buzos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categoria/pantalones">Pantalones</Link>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;
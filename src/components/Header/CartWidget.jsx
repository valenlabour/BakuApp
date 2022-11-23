import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    
    const { cantProductos } = useContext(CartContext)

    return (
        <div className="container-cart">
            <Link to='/cart'>
                <span className="cart material-symbols-outlined">
                    shopping_bag
                </span>
                <span className="contador translate-middle badge rounded-pill">
                    {cantProductos === 0 ? 0 : cantProductos}
                <span className="visually-hidden"></span>
                </span>
            </Link>
        </div>
    )
}

export default CartWidget;
import React from 'react'
import estilos from './navbar.module.css';

const CartWidget = () => {
    return (
        <div className={estilos.containerCart}>
            <span className="material-symbols-outlined">
                shopping_bag
            </span>
        </div>
    )
}

export default CartWidget;
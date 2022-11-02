import React from 'react'

const CartWidget = () => {
    return (
        <div className="container-cart">
            <span className="cart material-symbols-outlined">
                shopping_bag
            </span>
            <span className="contador translate-middle badge rounded-pill">
                0
            <span className="visually-hidden"></span>
            </span>
        </div>
    )
}

export default CartWidget;
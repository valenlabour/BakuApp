import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCart from './ItemCart';
import { Link } from "react-router-dom";

const Cart = () => {


    const { cart, vaciarCarrito, obtenerPrecioTotal, mostrarCarritoVacio } = useContext(CartContext);

    if (!cart.length) {
        return (mostrarCarritoVacio())
    }

    return (
        <div className='container-carrito'>
            <div className='container-productos-carrito'>
                {cart.map((producto) => {
                    return <ItemCart producto={producto} isInCart={true} key={producto.id} />
                })}
            </div>
            <div className='container-info'>
                <h2 className='carrito-total'>Total: ${Intl.NumberFormat().format(obtenerPrecioTotal)}</h2>
                <button className='btn-vaciar-carrito' onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
            <div className='iniciar-compra'>
                <Link className='btn-iniciar-compra' to='/checkout'>Iniciar compra</Link>
            </div>
        </div>
    );
};

export default Cart;
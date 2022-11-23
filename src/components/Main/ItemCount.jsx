import { useState } from 'react';

const ItemCount = ({ stock, initial=1, onAdd }) => {

    const [cantidad, setCantidad] = useState(initial);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };
    const agregarAlCarrito = () => {
        if (cantidad > 0) {
            onAdd(cantidad)
        }
    }
    return (
        <>
            <div className="container-cant-producto">
                <span className="cant-producto__quitar" disabled={cantidad === initial} onClick={restar} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
                    </svg>
                </span>
                <p className="cant-producto__total">{cantidad}</p>
                <span className="cant-producto__agregar" disabled={cantidad === stock} onClick={sumar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                </span>
            </div>
            <button className='btn-añadir-carrito' onClick={agregarAlCarrito}> Agregar al carrito </button>
        </>
    );
};

export default ItemCount;
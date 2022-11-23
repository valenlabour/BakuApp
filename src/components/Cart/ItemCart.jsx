import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCart = ({ producto, isInCart }) => {
    const { eliminarProducto } = useContext(CartContext);

    if (isInCart) {
        return (
            <div className='producto' key={producto.id}>
                <img className='producto-img' src={producto.img} alt={producto.title}/>
                <div>
                    <h3 className='producto-titulo'>{producto.titulo}</h3>
                    <p className='producto-valor'>Precio unitario: ${Intl.NumberFormat().format(producto.precio)}</p>
                    <div className='producto-info'>
                        <p className='producto-cantidad'>Cantidad: {producto.cantidad}</p>
                        <button className='btn-eliminar-producto' onClick={() => eliminarProducto(producto.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='producto-checkout' key={producto.id}>
            <img className={isInCart ? 'producto-img': 'producto-img-checkout'} src={producto.img} alt={producto.title}/>
            <div>
                <h3 className='producto-titulo'>{producto.titulo} × {producto.cantidad}</h3>
                <p className='producto-valor'>Precio unitario: ${Intl.NumberFormat().format(producto.precio)}</p>
            </div>
        </div>
    );
};
export default ItemCart;
import { useState, createContext } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (item, cantidad) => {
        if (estaEnCarrito(item.id)) {
            aumentarCantidadProducto(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
        alertaProductoAgregado(item.titulo, cantidad)
    };

    const aumentarCantidadProducto = (productoAAgregar, cantidad) => {
        const cartActualizado = cart.map((producto) => {
            if (productoAAgregar.id === producto.id) {
                const productoActualizado = {
                    ...producto,
                    cantidad: producto.cantidad + cantidad,
                };
                return productoActualizado;
            } else {
                return producto;
            }
        });
        setCart(cartActualizado);
    };

    const alertaProductoAgregado = (nombreProducto, cantidad) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: `Agregaste ${cantidad} "${nombreProducto}" al carrito"`
          })
    }

    //funcion para ver si está en el carrito
    const estaEnCarrito = (id) => {
        return cart.some((producto) => producto.id === id);
    };


    const vaciarCarrito = () => {
        setCart([]);
    };

    const eliminarProducto = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
    };

    const obtenerPrecioTotal = cart.reduce((subTotal, producto) => subTotal + producto.precio*producto.cantidad, 0);

    const cantProductos = cart.reduce((subCantidad, producto) => subCantidad + producto.cantidad, 0);

    const obtenerProducto = (id) => {
        return cart.find((producto) => producto.id === id)
    }

    const cantProductoEnCarrito = (id) => {return obtenerProducto(id)?.cantidad}

    const mostrarCarritoVacio = () => {
        return (
            <div className='carrito-vacio'>
                <p>El carrito se encuentra vacío</p>
                <Link to='/'>Ir al shop</Link>
            </div>
        )
    }

    return (
        <CartContext.Provider 
        value={{ 
            cart, 
            agregarAlCarrito,
            estaEnCarrito, 
            vaciarCarrito,
            mostrarCarritoVacio,
            eliminarProducto,
            cantProductos, 
            obtenerPrecioTotal, 
            cantProductoEnCarrito, 
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
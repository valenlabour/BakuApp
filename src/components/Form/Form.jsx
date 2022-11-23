import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCart from '../Cart/ItemCart';
import Swal from 'sweetalert2';
import { baseDatos } from '../../firebaseConfig'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const Form = () => {
    
    const { cart, obtenerPrecioTotal, vaciarCarrito, mostrarCarritoVacio } = useContext(CartContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');
    const [telefono, setTelefono] = useState('');

    const [idOrden, setIdOrden] = useState('');


    const enviarDatos = (e) => {
        e.preventDefault();
        const orden = {
            comprador: {
                nombre,
                apellido,
                telefono,
                email1,
            },
            items: cart,
            total: obtenerPrecioTotal,
            fecha: serverTimestamp(),
        };

        const coleccionOrdenes = collection(baseDatos, 'ordenes');

        addDoc(coleccionOrdenes, orden)
            .then((res) => {
                setIdOrden(res.id);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const modificarNombre = (e) => setNombre(e.target.value);

    const modificarApellido = (e) => setApellido(e.target.value);

    const modificarEmail1 = (e) => setEmail1(e.target.value)

    const modificarEmail2 = (e) => setEmail2(e.target.value)
    
    const modificarTelefono = (e) => setTelefono(e.target.value)




    const alertaCompraFinalizada = () => {
        Swal.fire(
            '¡Listo!',
            `Te agradecemos por comprar en nuestra tienda. Pronto nos pondremos en contacto para que puedas recibir tu pedido.
            Este es tu id de compra: ${idOrden}`,
            'success'
            )
        vaciarCarrito()
        mostrarCarritoVacio()
    }

    const camposValidos = (nombre, apellido, email1, email2, telefono) => {
        return esNombreValido(nombre) && esNombreValido(apellido) && sonMailsIguales(email1, email2) && esTelefonoValido(telefono)
    }
    
    const esNombreValido = (nombre) => {
        const letras = new RegExp('^[A-Z]+$', 'i');
        if (!letras.test(nombre)) {
         return false
        }
        return true
     }
    const sonMailsIguales = (email1, email2) => {
        if (!esMailValido(email1) || !esMailValido(email2)) {
            return false
        }
        return email1 === email2
    }
    const esMailValido = (email) => {
        if ( email.match('@') === null || email.match('@').length > 1) {
            return false
        }
        if (/ /.test(email)) {
            return false
        }
        let indiceArroba = email.search('.com')
        if (/.com/.test(email.slice(indiceArroba)) !== true) {
            return false
        }
        return true
    }

    const esTelefonoValido = (telefono) => {
        return !isNaN(telefono) && telefono.length === 10
    }

    const alertaCompletarCampos = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3500,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'warning',
            title: 'Por favor completa los campos correctamente'
          })
    }

    if (!cart.length) {
        return (mostrarCarritoVacio())
    }

    return (
        <div className='container-checkout'>
            <div className='container-datos-contacto md-12'>
                <h2>Datos de contacto</h2>
                <form action="" onSubmit={enviarDatos} className='formulario-checkout'>
                    <div className="row campos-checkout">
                        <div className="col-md 4 campos-checkout">
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nombre" 
                            value={nombre}
                            onChange={modificarNombre}
                            />
                        </div>
                        <div className="col campos-checkout">
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Apellido" 
                            value={apellido}
                            onChange={modificarApellido}
                            />
                        </div>
                        <div className="col-md-12 campos-checkout">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Teléfono" 
                            value={telefono}
                            onChange={modificarTelefono}
                            />
                        </div>
                        <div className="col-md-12 campos-checkout">
                            <input 
                            type="text" 
                            className="form-control"  
                            placeholder='Email' 
                            value={email1}
                            onChange={modificarEmail1}
                            />
                        </div>
                        <div className="col-md-12 campos-checkout">
                            <input 
                            type="text" 
                            className="form-control"  
                            placeholder='Confirmar email' 
                            value={email2}
                            onChange={modificarEmail2}
                            />
                        </div>
                    </div>
                    <button className='btn-iniciar-compra' onClick={camposValidos(nombre, apellido, email1, email2, telefono) ? alertaCompraFinalizada : alertaCompletarCampos}>
                        Finalizar compra
                    </button>
                </form>
            </div>
            <div className='container-productos-checkout md-4'>
                <div className='productos-checkout'>
                    {cart.map((producto) => {
                        return <ItemCart producto={producto} isInCart={false} key={producto.id} />
                    })}
                </div>
                <div className='container-info'>
                    <h2 className='carrito-total'>Total: ${Intl.NumberFormat().format(obtenerPrecioTotal)}</h2>
                </div>
            </div>
        </div>
    );
};

export default Form;
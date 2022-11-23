import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, query, where } from 'firebase/firestore';
import { coleccionProductos } from '../../firebaseConfig';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const { categoria } = useParams();

    useEffect(() => {

        const reducirColeccion = () =>  query(coleccionProductos, where('categoria', '==', categoria));

        const productosAMostrar = categoria ? reducirColeccion() : coleccionProductos

        getDocs(productosAMostrar)
        .then((res) => {
            const productos = res.docs.map((producto) => {
                return {
                    id: producto.id,
                    ...producto.data()
                };
            });
            setItems(productos)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })

        return () => {setLoading(true)}

    }, [categoria]);

    const seccion = (categoria) => {
        let titulo = "Productos"
        if (categoria) {
            titulo = categoria[0].toUpperCase() + categoria.slice(1)
        }
        return titulo
    }

    if (loading) {
        return (
            <div className='loading'>
            </div>
        )
    }

    return (
        <section>
            <div className='productos'>
                <h2 className='productos-titulo'>{seccion(categoria)}</h2>
            </div>
            <div className="container-product">
                <ItemList items={items} />
            </div>
        </section>
    );
};

export default ItemListContainer;
import React, { useEffect, useState } from 'react';
import { obtenerProductos } from '../../productos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const {categoria} = useParams();

    useEffect(() => {
        obtenerProductos(categoria)
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoria]);

    const seccion = (categoria) => {
        let titulo = "Productos"
        if (categoria) {
            titulo = categoria[0].toUpperCase() + categoria.slice(1)
        }
        return titulo
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
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerProducto } from '../../productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const {idProducto} = useParams();

    useEffect(() => {
        obtenerProducto(idProducto)
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return (
        <div className="container-product">
            <ItemDetail item={item} key={idProducto} />
        </div>
    );
};

export default ItemDetailContainer;
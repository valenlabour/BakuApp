import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { obtenerProducto } from '../../productos';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore'
import { coleccionProductos } from '../../firebaseConfig';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const [loading, setLoading] = useState(true)

    const {idProducto} = useParams();

    useEffect(() => {
        const producto = doc(coleccionProductos, idProducto)
        
        getDoc(producto)
        .then((res) => {
            setItem({
                id: res.id,
                ...res.data(),
            })
        })
        .catch(() => {})
        .finally(() => {
            setLoading(false)
        })
        
        return (
            setLoading(true)
        )
        
    }, [idProducto]);

    if (loading) {
        return (
            <div className='loading'>
            </div>
        )
    }

    return (
        <div className="container-product">
            <ItemDetail item={item} key={idProducto} />
        </div>
    );
};

export default ItemDetailContainer;
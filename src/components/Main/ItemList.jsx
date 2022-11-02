import React from 'react';
import Item from './Item';


const ItemList = ({ items }) => {
    return (
        items.map((producto) => {
            return <Item producto={producto} key={producto.id} />;
        })
    );
};

export default ItemList;
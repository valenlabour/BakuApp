import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <div className='card col-12 col-md-12 col-lg-12'>
            <img src={producto.img} className="card-img" alt={producto.titulo}/>
            <div className="card-body">
                <p className="card-title"> {producto.titulo} </p>
                <p className="card-cost"> ${producto.precio} </p>
                <p className="card-text"> <strong> 3 </strong> cuotas sin interés de<strong> ${Math.trunc(producto.precio / 3)}</strong></p>
                <Link className="card-detail" to={`/productos/${producto.id}`}>Ver más detalles</Link>
            </div>
        </div>
    );
};

export default Item;

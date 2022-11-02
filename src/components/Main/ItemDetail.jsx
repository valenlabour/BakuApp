import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const onAdd = (cantidad) => console.log(cantidad)
    
    return (
        <>
            <section className="seccion-producto">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="card-img mb-5 mb-md-0" src={item.img} alt={item.titulo} /></div>
                        <div className="col-md-6">
                            <h1 className="display-5 fw-bolder producto-nombre">{item.titulo}</h1>
                            <div className="fs-5 mb-5">
                                <p className="producto-precio">${item.precio}</p>
                            </div>
                            <div className="info-pago">
                                <div className="info-pago__cuotas">
                                    <p> <span>3</span> cuotas sin interés de <span>${Math.trunc(item.precio / 3)}</span></p>
                                </div>
                                <div className="info-pago__desc">
                                    <p> <span>5% de descuento</span> pagando con Transferencia / Depósito</p>
                                </div>
                            </div>
                            <form className="talle">
                                <p>Talle</p>
                                <select className="form-select form-select-sm talle__caja" aria-label=".form-select-sm example">
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                            </form>
                            <div className="talle">
                                <p>Guía de talles</p>
                            </div>
                            <div className="count d-flex">
                                <ItemCount stock={10} initial={0} onAdd={onAdd}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ItemDetail;
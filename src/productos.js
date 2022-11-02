export const productos = [
    {   
        id: '1',
        categoria: 'remeras',
        titulo: 'Remera Fear',
        precio: 3499,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238210/baku/remeras/remera-fear_fhms7e.jpg"
    },
    {   
        id: '2',
        categoria: 'remeras',
        titulo: 'Remera Stylver',
        precio: 3499,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238210/baku/remeras/remera-full-black_ciss05.jpg"
    },
    {   
        id: '3',
        categoria: 'remeras',
        titulo: 'Remera Good Life',
        precio: 3499,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238210/baku/remeras/remera-good-life_s5afqq.jpg"
    },
    {
        id: '4',
        categoria: 'remeras',
        titulo: 'Remera Arcano',
        precio: 3499,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238210/baku/remeras/remera-arcano_b4ois2.jpg"
    },
    {
        id: '5',
        categoria: 'buzos',
        titulo: 'Buzo Rider',
        precio: 6699,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238135/baku/buzos/buzo-rider_xyuve1.jpg"
    },
    {
        id: '6',
        categoria: 'buzos',
        titulo: 'Buzo Nigo Grey',
        precio: 7299,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238135/baku/buzos/buzo-nigo-grey_rj1pby.jpg"
    },
    {
        id: '7',
        categoria: 'buzos',
        titulo: 'Buzo Walo Pink',
        precio: 7299,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238135/baku/buzos/buzo-walo-pink_j5v7oe.jpg"
    },
    {
        id: '8',
        categoria: 'buzos',
        titulo: 'Buzo Nigo Vison',
        precio: 7299,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238135/baku/buzos/buzo-nigo-vison_xmmkdz.jpg"
    },
    {
        id: '9',
        categoria: 'buzos',
        titulo: 'Buzo Future',
        precio: 6699,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238135/baku/buzos/buzo-future_ieloha.jpg"
    },
    {
        id: '10',
        categoria: 'buzos',
        titulo: 'Buzo Sloom',
        precio: 6699,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238134/baku/buzos/buzo-sloom_xi4n88.jpg"
    },
    {
        id: '11',
        categoria: 'pantalones',
        titulo: 'Jean Cropped',
        precio: 7240,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238234/baku/pantalones/jean-cropped_un8vmi.jpg"
    },
    {
        id: '12',
        categoria: 'pantalones',
        titulo: 'Jean Charles',
        precio: 7890,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238234/baku/pantalones/jean-charles_zmnizm.jpg"
    },
    {
        id: '13',
        categoria: 'pantalones',
        titulo: 'Jean Tyler',
        precio: 8900,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238234/baku/pantalones/jean-tyler_kxjbel.jpg"
    },
    {
        id: '14',
        categoria: 'pantalones',
        titulo: 'Jogger Rodd Navy',
        precio: 6200,
        img: "https://res.cloudinary.com/dckckats5/image/upload/v1667238235/baku/pantalones/jogger-rodd-navy_rwhtbh.jpg"
    },
]

export const obtenerProductos = (categoria) => {
    return new Promise((res, rej) => {
        const productosFiltrados = productos.filter(
            (producto) => producto.categoria === categoria
        );
        const productosAMostrar = categoria ? productosFiltrados : productos;
        setTimeout(() => {
            res(productosAMostrar);
        }, 500);
    });
};

export const obtenerProducto = (idProducto) => {
    return new Promise((res, rej) => {
        const productoAMostrar = () => productos.find((producto) => producto.id === idProducto)
        res(productoAMostrar);
    });
};
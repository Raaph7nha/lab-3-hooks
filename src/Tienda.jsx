import React, { useEffect, useState } from 'react';

export const Tienda = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function obtenerProductos() {
            const respuesta = await fetch('https://fakestoreapi.com/products');
            const datos = await respuesta.json();
            setProductos(datos); 
        }
        obtenerProductos();
    }, []);

    return (
        <div className="contenedor-principal">
            <h1 className="titulo-pagina">Tienda</h1>
            
            <div className="grilla-productos">
                {productos.map((producto) => (
                    <div className="tarjeta-producto" key={producto.id}>
                        <img 
                            src={producto.image} 
                            className="imagen-producto" 
                            alt={producto.title} 
                        />
                        <div className="contenido-tarjeta">
                            <h2 className="titulo-producto">{producto.title}</h2>
                            <p className="descripcion-producto">
                                {producto.description.substring(0, 100)}...
                            </p>
                            <span className="precio-producto">${producto.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
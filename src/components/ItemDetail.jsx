import React from 'react';
import ItemCount from './ItemCount';


const ItemDetail = ({ producto, agregarAlCarrito }) => {
  if (!producto) return null;

  // Recibe la cantidad desde ItemCount y pasa el objeto producto y cantidad
  const handleAdd = (cantidad) => {
    agregarAlCarrito(producto, cantidad);
  };

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <img src={producto.imagenUrl} className="card-img-top" alt={producto.nombre} />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>
          {/* Mini descripción, tamaño y recomendación */}
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item"><strong>Tamaño:</strong> {producto.tamano || 'Universal'}</li>
            <li className="list-group-item"><strong>Recomendación:</strong> {producto.recomendacion || 'Ideal para ciclomotores clásicos.'}</li>
          </ul>
          <p className="card-text">Precio: ${producto.precio}</p>
          <ItemCount initial={1} stock={10} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

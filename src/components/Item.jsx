const Item = ({ id, nombre, precio, imagenUrl, agregarAlCarrito }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imagenUrl} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Precio: ${precio}</p>
        <button className="btn btn-primary" onClick={() => agregarAlCarrito(id)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Item;

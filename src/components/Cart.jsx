

import React, { useState } from 'react';

const Cart = ({ cartItems, onRemove, onAdd, onClear }) => {
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const [form, setForm] = useState({ nombre: '', email: '', pago: 'Efectivo' });
  const [formError, setFormError] = useState('');

  if (compraFinalizada) {
    return (
      <div className="container mt-4">
        <h3>¡Gracias por tu compra!</h3>
        <p>Recibirás un correo con el resumen de tu pedido.</p>
        <button className="btn btn-secondary mt-3" onClick={() => window.location.href = '/'}>Volver al catálogo</button>
      </div>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return <div className="container mt-4"><h3>El carrito está vacío.</h3></div>;
  }

  const handleInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFinalizar = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email) {
      setFormError('Por favor completa todos los datos.');
      return;
    }
    setFormError('');
    setCompraFinalizada(true);
    if (onClear) onClear();
  };

  return (
    <div className="container mt-4">
      <h3>Carrito de compras</h3>
      <ul className="list-group mb-3">
        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.nombre}</strong> <br />
              Cantidad: {item.cantidad} <br />
              Precio unitario: ${item.precio ? item.precio : 0}
            </div>
            <div>
              <button className="btn btn-sm btn-danger me-2" onClick={() => onRemove(item.id)}>-</button>
              <button className="btn btn-sm btn-success" onClick={() => onAdd(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="fw-bold mb-3">Total: ${cartItems.reduce((acc, item) => acc + (item.precio ? item.precio : 0) * item.cantidad, 0)}</div>
      <form onSubmit={handleFinalizar} className="mb-3">
        <div className="mb-2">
          <label className="form-label">Nombre:</label>
          <input type="text" name="nombre" className="form-control" value={form.nombre} onChange={handleInput} />
        </div>
        <div className="mb-2">
          <label className="form-label">Email:</label>
          <input type="email" name="email" className="form-control" value={form.email} onChange={handleInput} />
        </div>
        <div className="mb-2">
          <label className="form-label">Método de pago:</label>
          <select name="pago" className="form-select" value={form.pago} onChange={handleInput}>
            <option value="Efectivo">Efectivo</option>
            <option value="Tarjeta">Tarjeta</option>
            <option value="Transferencia">Transferencia</option>
          </select>
        </div>
        {formError && <div className="text-danger mb-2">{formError}</div>}
        <button className="btn btn-primary" type="submit">Finalizar compra</button>
      </form>
    </div>
  );
};

export default Cart;

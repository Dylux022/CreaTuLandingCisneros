

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import CarburadorImg from '../assets/carburador.png';
import CilindroZanellaImg from '../assets/cilindrozanella.png';
import EscapeGarelliImg from '../assets/escapegarelli.png';
import FiltroAireImg from '../assets/filtroaire.png';

const productos = [
  { id: 1, nombre: 'Cilindro Zanella 70cc', precio: 18000, imagenUrl: CilindroZanellaImg, categoria: 'motor' },
  { id: 2, nombre: 'Escape Garelli 50cc', precio: 9500, imagenUrl: EscapeGarelliImg, categoria: 'escape' },
  { id: 3, nombre: 'Carburador 15mm', precio: 7200, imagenUrl: CarburadorImg, categoria: 'carburador' },
  { id: 4, nombre: 'Filtro de aire', precio: 3000, imagenUrl: FiltroAireImg, categoria: 'filtro' },
];

const getProductos = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(productos.filter(p => p.categoria === categoryId));
      } else {
        resolve(productos);
      }
  }, 150);
  });
};

const ItemListContainer = ({ greeting, agregarAlCarrito }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    getProductos(categoryId).then(res => {
      setItems(res);
      setLoading(false);
    });
  }, [categoryId]);

  // Filtrado por búsqueda
  const filteredItems = items.filter(item =>
    item.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center">{greeting}</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar producto..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {loading ? (
        <div>Cargando productos...</div>
      ) : (
        <ItemList agregarAlCarrito={agregarAlCarrito} productos={filteredItems} />
      )}
    </div>
  );
};

export default ItemListContainer;

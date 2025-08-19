

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import CilindroZanellaImg from '../assets/cilindrozanella.png';
import EscapeGarelliImg from '../assets/escapegarelli.png';
import CarburadorImg from '../assets/carburador.png';
import FiltroAireImg from '../assets/filtroaire.png';

const productos = [
  {
    id: 1,
    nombre: 'Cilindro Zanella 70cc',
    precio: 18000,
    imagenUrl: CilindroZanellaImg,
    categoria: 'motor',
    descripcion: 'Cilindro de alta calidad para Zanella 70cc.'
  },
  {
    id: 2,
    nombre: 'Escape Garelli 50cc',
    precio: 9500,
    imagenUrl: EscapeGarelliImg,
    categoria: 'escape',
    descripcion: 'Escape deportivo para Garelli 50cc.'
  },
  {
    id: 3,
    nombre: 'Carburador 15mm',
    precio: 7200,
    imagenUrl: CarburadorImg,
    categoria: 'carburador',
    descripcion: 'Carburador de 15mm universal.'
  },
  {
    id: 4,
    nombre: 'Filtro de aire',
    precio: 3000,
    imagenUrl: FiltroAireImg,
    categoria: 'filtro',
    descripcion: 'Filtro de aire de alto flujo.'
  },
];

const getProductoById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find(p => p.id === Number(id)));
  }, 150);
  });
};

const ItemDetailContainer = ({ agregarAlCarrito }) => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductoById(itemId).then(prod => {
      setProducto(prod);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) return <div>Cargando...</div>;
  if (!producto) return <div>Producto no encontrado</div>;

  return <ItemDetail producto={producto} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer;

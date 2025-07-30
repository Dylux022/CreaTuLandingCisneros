// src/components/ItemList.jsx
import Item from './Item';
import CarburadorImg from '../assets/carburador.png';
import CilindroZanellaImg from '../assets/cilindrozanella.png';
import EscapeGarelliImg from '../assets/escapegarelli.png';
import img4 from '../assets/filtroaire.png';

const productos = [
  {
    id: 1,
    nombre: 'Cilindro Zanella 70cc',
    precio: 18000,
    imagenUrl: CilindroZanellaImg,
  },
  {
    id: 2,
    nombre: 'Escape Garelli 50cc',
    precio: 9500,
    imagenUrl: EscapeGarelliImg,
  },
  {
    id: 3,
    nombre: 'Carburador 15mm',
    precio: 7200,
    imagenUrl: CarburadorImg,
  },
  {
    id: 4,
    nombre: 'Filtro de aire',
    precio: 3000,
    imagenUrl: img4,
  },
];

const ItemList = ({ agregarAlCarrito }) => {
  return (
    <div className="container mt-4">
      <div className="row g-3">
        {productos.map(prod => (
          <div key={prod.id} className="col-md-3">
            <Item {...prod} agregarAlCarrito={agregarAlCarrito} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;

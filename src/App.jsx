import { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const agregarAlCarrito = (idProducto) => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <NavBar cartCount={cartCount} />
      <ItemListContainer greeting="¡Bienvenido al Club del Ciclomotor!" />
      <ItemList agregarAlCarrito={agregarAlCarrito} />
    </>
  );
}

export default App;

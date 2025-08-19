import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartContext } from './context/CartContext';

function App() {
  const { cartItems, cartCount, addToCart, removeFromCart, addUnit, clearCart } = useContext(CartContext);

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido al Club del Ciclomotor!" agregarAlCarrito={addToCart} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer agregarAlCarrito={addToCart} />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer agregarAlCarrito={addToCart} />} />
  <Route path="/cart" element={<Cart cartItems={cartItems} onRemove={removeFromCart} onAdd={addUnit} onClear={clearCart} />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

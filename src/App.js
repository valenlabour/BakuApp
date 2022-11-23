import './App.css';
import Cart from "./components/Cart/Cart"
import CartProvider from './context/CartContext';
import Form from "./components/Form/Form"
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import ItemListContainer from './components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <ItemListContainer />
          }/>
          <Route path='/categoria/:categoria' element={
            <ItemListContainer />
          }/>
          <Route path='/productos/:idProducto' element={
            <ItemDetailContainer />
          }/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Form />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

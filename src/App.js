import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import ItemListContainer from './components/Main/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <Header />
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Header from './componentes/Header';
import ItemListContainer from './componentes/ItemListContainer';

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer greeting="Hola mundo!" />
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from "./components/NavBar/ItemListContainer";

function App() {
  return (
    <>
      <NavBar/>
      <CartWidget/>
      <ItemListContainer/>
    </>
  );
}

export default App;

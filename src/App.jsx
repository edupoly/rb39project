import { useSelector } from 'react-redux';
import './App.css';
import ProductList from './features/products/ProductList';
import Newproducts from './features/newproducts/Newproducts';
import NewTodo from './features/todos/NewTodo';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  var {cartItems} = useSelector(state=>state.productReducer)

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;

import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import Cart from './components/cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes, Route}  from "react-router-dom";
import Form from './components/forms/Form';
import Provider from './context/CartContext';

function App() {
  return (
    <>
    <Provider>

    <BrowserRouter> 
        <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryName' 
              element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/checkout' element={<Form/>}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>

     </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
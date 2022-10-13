import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes, Route}  from "react-router-dom";
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter> 
        <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryName' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>

     </BrowserRouter>
    </>
  );
}

export default App;
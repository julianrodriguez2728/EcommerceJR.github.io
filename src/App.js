import logo from './logo.svg';
import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';

function App() {
  return (
    <>
      <header className='header'> 
        <NavBar/>
      </header>
      <main>
    <ItemListContainer />
      </main>
      <footer>
        
      </footer>
    </>
  );
}

export default App;
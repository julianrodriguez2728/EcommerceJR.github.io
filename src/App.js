import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className='header'> 
        <NavBar/>
      </header>
      <body>
        <ItemListContainer greeting ='Saludos Profe!'/>



      </body>
    </div>
  );
}

export default App;
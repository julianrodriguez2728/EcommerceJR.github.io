import CartWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom";



function NavBar(){
    return(
        <>
        <header className='header'>

        <div className="contenedor-header">
        <Link className="titulo-link" to="/">
        <h1 className="titulo">MIMIK U</h1>
        </Link>
        <ul className="nav">
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/category/Vivos">Vivos</NavLink></li>
            <li><NavLink to="/category/Apagados">Apagados</NavLink></li>
            <li><NavLink to="/category/Contacto">Contacto</NavLink></li>
            <NavLink to="/category/carrito">
        <CartWidget />
            </NavLink>
        </ul>
        </div>
        </header>
        </>
    )
}

export default NavBar;
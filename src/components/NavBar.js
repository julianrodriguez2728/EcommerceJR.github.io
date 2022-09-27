import CartWidget from "./CartWidget"



function NavBar(){
    return(
        <>
        <h1 className="titulo">CoMMiC</h1>
        <ul className="nav">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
        <CartWidget />
        </ul>

        </>
    )
}

export default NavBar;
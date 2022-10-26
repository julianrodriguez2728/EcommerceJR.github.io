import CartWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom";
import { useEffect, useState } from "react";
import { DB } from "../../documents/firebases";
import { collection, getDocs } from "firebase/firestore";



function NavBar(){
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        const collectionCategorias = collection( DB ,  "categorias")
        getDocs(collectionCategorias )
        .then((res)=>{
            const categorias = res.docs.map((cat)=>{
                return{
                    id: cat.id,
                    ...cat.data()
                };
            });
            setCategories(categorias);
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])

    return(
        <>
        <header className='header'>

        <div className="contenedor-header">
        <Link className="titulo-link" to="/">
        <h1 className="titulo">MIMIK U</h1>
        </Link>
        <ul className="nav">
            {categories.map((cat)=>{
                <NavLink key={cat.id} to={`/category/${cat.path}`}>{cat.name}</NavLink>
            })}
            <NavLink to="/cart">
        <CartWidget />
            </NavLink>
        </ul>
        </div>
        </header>
        </>
    )
}

export default NavBar;
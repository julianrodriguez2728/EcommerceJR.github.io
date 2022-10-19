import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item}) =>{
    const [unidades, setUnidades] =useState(0);
    const {addToCart}= useContext(CartContext);
    const prueba = (numero)=>{
        setUnidades(numero);
        addToCart(item, numero);
    }
    return(
        <>
        <div className="detail-container">
            <article className="card-detail">

            <img className="imagen-detalle" src={item.img} alt="" />
            <div className="detalles">
                <h2 className="subtitulo">{item.title}</h2>
                <h3 className="precios">${item.price}</h3>
                <h4 className="categorias">{item.categoria}</h4>
                {unidades === 0 ? (
                <ItemCount prueba={prueba} stock={10} initial={1}/>
                    
                ):(
                    <Link to='/cart'>IR AL CARRITO</Link>
                )}
            </div>
            </article>
        </div>
        </>
    )
}

export default ItemDetail;
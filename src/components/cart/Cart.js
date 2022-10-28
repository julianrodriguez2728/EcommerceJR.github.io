import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"

const Cart = ()=>{
    const {cart,  deleteAll, deleteOne}= useContext(CartContext);
    if(cart.lenght === 0){
        return <h1>No hay productos</h1>
    }

    return(
        <div className="contenedor-compra">
            {
                cart.map ((prod)=>{
                    return ( 
                            <section key={prod.id} className="cartas-fondo"> 
                           <div 
                           className="contenedor-carrito1">
                        <img src={prod.img} alt={prod.title} />
                        <div className="contenedor-carrito2">
                            <h2>{prod.title}</h2>
                            <h3>$ {prod.price}</h3>
                            <h3>cantidad: {prod.cantidad}</h3>
                            <h3>subtotal: ${prod.price*prod.cantidad}</h3>
                        </div>
                        <div className="contenedor-borrar">

                        <button onClick={()=> deleteOne(prod.id)} className="borrar">Borrar Producto</button>
                            <Link to ="/checkout"className="borrar">checkout</Link>
                        </div>
                    </div>
                           </section>
                       ) 
                })
            }
        </div>
    )
}
export default Cart
import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"

const Cart = ()=>{
    const {cart,  deleteAll, deleteOne}= useContext(CartContext);
    if (cart.length === 0) {

        return(
            <div className="contenedor-vacio">
            <h1 className="vacio">Carrito vacio...... *cof* *cof*</h1>
            </div>
            
            ) 
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

                        <Link onClick={()=> deleteOne(prod.id)} className="borrar">
                            <img src={"../img/basurero.png"}  alt="basurero" className="basurero"/>
                        </Link>
                        </div>
                    </div>
                           </section>
                       ) 
                    })
                }
                <div className="checkout-container">
<Link to ="/checkout"className="checkout">Finalizar Compra</Link>
                </div>
        </div>
    )
}
export default Cart
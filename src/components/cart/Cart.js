import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = ()=>{
    const {cart}= useContext(CartContext);

    return(
        <div>
            {
                cart.map ((prod)=>{
                    return(
                           <div 
                           key={prod.id}>
                        <img src={prod.img} alt={prod.title} />
                        <div className="contenedor-carrito">
                            <h2>{prod.title}</h2>
                            <h3>$ {prod.price}</h3>
                            <h3>cantidad: {prod.cantidad}</h3>
                            <h3>subtotal: ${prod.price*prod.cantidad}</h3>
                        </div>
                    </div>
                       ) 
                })
            }
        </div>
    )
}
export default Cart
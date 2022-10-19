import {createContext, useState} from "react";

export const CartContext = createContext ();

const Provider = ({children})=>{
    const [cart, setCart] = useState([]);
    const addToCart = (cantidad,  item)=>{
        // setCart()
        console.log(item , cantidad)
    }

    return(
         <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
export default Provider;
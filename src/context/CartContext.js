import {createContext, useState} from "react";

export const CartContext = createContext ();

const Provider = ({children})=>{
    const [cart, setCart] = useState([]);
    const addToCart = (item, cantidad)=>{
        const producto = {...item, cantidad}
        if (isInCart(producto.id)) {
            alert("ya está en el carro")
        } else {
            
                setCart([...cart, producto]);
        }
    }

    const isInCart = (id)=> cart.some((prod) => prod.id ===id)
    const deleteAll = ()=> setCart([]);
    const deleteOne = (id) =>{
        const prodFiltrado = cart.filter((prod)=> prod.id !== id)
        setCart(prodFiltrado);
    }
    const totalUnidades = ()=>{
        let acc = 0
        const copia = [...cart]
        copia.forEach((prod) =>{
            acc = acc + prod.cantidad
        })
        return acc
    }
console.log(cart)
    return(
         <CartContext.Provider value={{ cart, totalUnidades ,addToCart, deleteAll , deleteOne}}>
            {children}
        </CartContext.Provider>
    )
}
export default Provider;
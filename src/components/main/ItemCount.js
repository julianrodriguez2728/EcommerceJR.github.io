import React, {useState} from "react";
const ItemCount = ({onAdd, stock, initial}) =>{

    const [count, setCount] = useState(initial)
    

    const sumar = () =>{
        count < stock && setCount(count + 1)

    }
    const restar = () =>{
        count > initial && setCount(count - 1)
    }
    return(
        <div className="container-count">
            <div className="count-btn">
                <button onClick={sumar} className="boton" >+</button>
                <p>{count}</p>
                <button onClick={restar} className="boton" >-</button>
            </div>
            <button className="add-btn-2" onClick={() => onAdd(count)}>Agregar al carrito</button >
        </div>
    )
}

export default ItemCount
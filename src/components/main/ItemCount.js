import React, {useState} from "react";
const ItemCount = (props) =>{

    const [count, setCount] = useState(props.initial)
    

    const sumar = () =>{
        count < props.stock && setCount(count + 1)

    }
    const restar = () =>{
        count > props.initial && setCount(count - 1)
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
import React, {useState} from "react";


const ItemCount = (props) =>{

    const [count, setCount] = useState(props.initial)

    const sumar = () =>{
        count < props.stock && setCount(count + 1)

    }
    const restar = () =>{
        count > props.initial && setCount(count - 1)
    }
    console.log(count)

    return(
        <div className="container-count">
            <div className="count-btn">
                <button onClick={sumar} className="boton" >+</button>
                <p>{count}</p>
                <button onClick={restar} className="boton" >-</button>
            </div>
            <div className="add-btn-1">Agregar al carrito</div>
        </div>
    )
}

export default ItemCount
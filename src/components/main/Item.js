import React from "react";
import { Link } from "react-router-dom";

const Item = ( {prod })=>{

    return(
    <div className="contenedor-cartas">
                <Link className="link-cartas" to={`/item/${prod.id}`}>

        <article className="card" style={{ width: "18rem" }}>
            <img src={prod.img} alt={prod.title} />
        <div className="card-body">
            <div className="card" style={{ width: "15rem" }}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" id="titulo-cartas">{prod.title}</li>
                <li className="list-group-item">{prod.price}</li>
                <li className="list-group-item">{prod.categoria}</li>
            </ul>
        </div>
            </div>
        </article>
                </Link>
    </div>
    )
}

    export default Item;
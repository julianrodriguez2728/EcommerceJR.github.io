import React from "react";
import { products } from "../productos/productos.js";
import Item from "./Item.js";

const ItemList = ( {items})=>{
    // console.log(props.items)
    return (
        <div className="item-list">
            {items.map((prod)=>{
                    return <Item prod={prod} key={prod.id}/>
                })
                }
        </div>
    )
}

export default ItemList;
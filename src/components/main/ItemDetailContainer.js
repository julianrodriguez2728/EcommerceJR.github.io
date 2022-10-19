import React, { useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../productos/productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [item, setItem] = useState({});
    const {id}=useParams();

    useEffect(() =>{
        const traerProductos = ()=>{
            return new Promise ((res, rej)=>{
                const producto = products.find((prod) => prod.id===Number(id));
                
                setTimeout(()=>{
                    res(producto);
                }, 2000);
            })
        };
        traerProductos()
        .then((res) =>{
            setItem(res);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, [])

    return(
        <div>
            <ItemDetail  item={item}/>
        </div>
    )
};

export default ItemDetailContainer;

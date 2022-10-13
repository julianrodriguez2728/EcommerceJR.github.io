import React, { useEffect, useState} from "react";
import ItemList from "./ItemList";
import { products } from "../productos/productos";
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{
    const [items, setItems]= useState([])

    
    const {categoryName} = useParams();
    useEffect(()=>{
        const traerProductos = () =>{

            return new Promise((res,rej)=>{
                const prodFiltrado = products.filter(
                    (prod)=> prod.categoria === categoryName
                )
                const prod = categoryName ? prodFiltrado : products;
                setTimeout(()=>{
                    res(prod);
                }, 500)
            })
        };
        traerProductos()
        .then((res)=>{
            setItems(res);
        })
        .catch(()=>{
            console.log();
        })
    }, [categoryName])


    return (
        <main>

        <div className="item-list-container">
            <ItemList  items= {items}/>
        </div>
        </main>
    )
}
export default ItemListContainer;
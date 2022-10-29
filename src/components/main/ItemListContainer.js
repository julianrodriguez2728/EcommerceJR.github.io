import React, { useEffect, useState} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import { DB } from "../../documents/firebases";
const ItemListContainer = () =>{
    const [items, setItems]= useState([])
    const [loading, setLoading] = useState (true)

    
    const {categoryName} = useParams();
    useEffect(()=>{
        const collectionProd = collection(DB, "productos");
        const referencias = categoryName ? query(collectionProd, where("categoria", "==", categoryName)):collectionProd
        getDocs(referencias)
        .then((res)=>{
            const productos = res.docs.map((prod)=>{
                return{
                    id: prod.id,
                    ...prod.data(),

                }
            })
            setItems(productos)
        })
        .catch(()=>{

        })
        .finally(()=>{
            setLoading(false);
        })
        return()=> setLoading (true);
    }, [categoryName])

    if(loading){
        return <h2>Cargando.....</h2>
    }

    return (
        <main>
        <div className="item-list-container">
            <ItemList  items= {items}/>
        </div>
        </main>
    )
}
export default ItemListContainer;
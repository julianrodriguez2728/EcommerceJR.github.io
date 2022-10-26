import React, { useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { DB } from "../../documents/firebases";
import { collection , doc, getDoc } from "firebase/firestore";
const ItemDetailContainer = ()=>{
    const [item, setItem] = useState({});
    const {id}=useParams();

    useEffect(() =>{
       const collectionProd = collection(DB , "productos")
       const ref = doc(collectionProd, id);



       getDoc(ref)
            .then((res)=>{
                setItem({
                    id: res.id,
                    ...res.data(),
        })
       })
    }, [id])

    return(
        <div className="contenedor-compra2">
            <ItemDetail  item={item}/>
        </div>
    )
};

export default ItemDetailContainer;

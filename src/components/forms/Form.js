import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { DB } from "../../documents/firebases";

const Form =()=>{
    const [name,  setName] = useState("");
    const [LastName, setLastName] = useState("");
    const {cart, total, deleteAll} = useContext(CartContext);
    const totalUnidades = total();
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("");
    const handleSubmit = (e)=>{
        setLoading(true);
        e.preventDefault();
        const order = {
            buyer: {name, LastName},
            items: cart,
            total: totalUnidades,
            date: serverTimestamp(),

        };
        const orderCollection = collection(DB, "orders")
        addDoc(orderCollection, order)
        .then((res)=>{
            setOrderId(res.id)
            deleteAll()
        })
        .catch(()=>{
            console.log()
        })
        .finally(()=>{
            setLoading(false);
        })
    }

    const handleChangeName = (e)=>{
        setName(e.target.value);
    }
    const handleChangeLastName = (e)=>{
        setLastName(e.target.value);
    }
    if(orderId){
        return(
            <div className="contenedor-compra-order">

            <h1>Compra Exitosa</h1>
            <h2>Su orden de compra es {orderId}</h2>
        </div>
        )

    }
    return(
        <div className="formulario">
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChangeName}/>
                <input type="text" name="apellido" placeholder="Apellido" onChange={handleChangeLastName}/>
                <button className="enviar">{loading?"enviando...": "enviar"}</button>
            </form>
        </div>
    )
}
export default Form;
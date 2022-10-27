import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { DB } from "../../documents/firebases";

const Form =()=>{
    const [name,  setName] = useState("");
    const [LastName, setLastName] = useState("");
    const {cart, total} = useContext(CartContext);
    const totalPrice = total();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const order = {
            buyer: {name, LastName},
            items: cart,
            total: totalPrice,
            date: serverTimestamp(),

        };
        const orderCollection = collection(DB, "orders")
        addDoc(orderCollection, order)
        .then((res)=>{
            console.log(res)
        })
        .catch(()=>{
            console.log()
        })
    }

    const handleChangeName = (e)=>{
        setName(e.target.value);
    }
    const handleChangeLastName = (e)=>{
        setLastName(e.target.value);
    }
    return(
        <div className="formulario">
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChangeName}/>
                <input type="text" name="apellido" placeholder="Apellido" onChange={handleChangeLastName}/>
                <button>Enviar</button>
            </form>
        </div>
    )
}
export default Form;
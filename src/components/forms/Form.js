import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { DB } from "../../documents/firebases";

const Form =()=>{
    const [name,  setName] = useState("");
    const [LastName, setLastName] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const {cart, total, deleteAll} = useContext(CartContext);
    const totalUnidades = total();
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("");
    const handleSubmit = (e)=>{
        setLoading(true);
        e.preventDefault();
        const order = {
            buyer: {name, LastName,},
            celular: {telefono},
            email: {email},
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
    const handlechangeTelefono = (e)=>{
        setTelefono(e.target.value);
    }
    const handlechangeEmail = (e)=>{
        setEmail(e.target.value);
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
            <form className="form" onSubmit={handleSubmit} action="">
                <div className="contenedor-total-input">

                <div className="contenedor-inputs">
                <h3>Nombre:
                </h3>
                <input className="nombre" type="text" name="nombre" placeholder="Nombre....." onChange={handleChangeName}/>
                </div>
                <div className="contenedor-inputs">
                <h3>Apellido:
                </h3>
                <input className="apellido" type="text" name="apellido" placeholder="Apellido...." onChange={handleChangeLastName}/>
                </div>
                <div className="contenedor-inputs">
                <h3>Celular:
                </h3>
                <input className="telefono" type="tel" name="telefono" placeholder="Telefono...." onChange={handlechangeTelefono}/>
                </div>
                <div className="contenedor-inputs">
                <h3>Email:
                </h3>
                <input  className="email" type="email" name="email" placeholder="Email....." onChange={handlechangeEmail}/>
                </div>
                <div className="boton-enviar">

                <button className="enviar">{loading?"enviando...": "enviar"}</button>
                </div>
                </div>
            </form>
        </div>
    )
}
export default Form;
import { useState } from "react";

const Form =()=>{
    const [name,  setName] = useState("");
    const [LastName, setLastName] = useState("");


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log( {name, LastName})
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
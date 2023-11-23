import React, { useEffect, useState } from "react";
import IndividualUsuario from "./individualUsuario";
import Axios from "axios";

function ListaUsuarios() {
    const[productos, setProductos] = useState([]) 

    useEffect(() => {
        Axios.get("/users").then(res => {
            console.log(res.data)
            setProductos(res.data)
        }).catch(error => {
            console.log(error)
        })

    }, [])

    const listausuarios = productos.map(usuario => {
        return(
            <div>
                <IndividualUsuario  usuario={usuario}/>
            </div>
        )
    })

    return (
        <div>
            <h2>Lista Usuarios</h2>
            {listausuarios}
        </div>
    );
}
export default ListaUsuarios;
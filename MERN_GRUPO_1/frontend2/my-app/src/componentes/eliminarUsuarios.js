import React, { useState } from "react";
import Axios from "axios";
function EliminarUsuarios(id) {
    const [users, setUsers] = useState([]);
    try{
        Axios.delete("/users", id)
        .then((res) => {
            alert(res.data);
        })
        .catch((error) => {});
} catch (error) {
    throw error;
}

        return (
            <div>
                <h2>Usuarios Eliminados</h2>
            </div>
        );
    }


export default EliminarUsuarios;
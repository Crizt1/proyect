import React from "react";

function IndividualUsuario({usuario}) {

  return (
    <div className="container">
        <div className="row">
            <ul className="list-group">
                <li className="list-group-item">{usuario.id}</li>
                <li className="list-group-item">{usuario.name}</li>
                <li className="list-group-item">{usuario.image}</li>
                <li className="list-group-item">{usuario.price}</li>
                <li className="list-group-item">{usuario.stock}</li>
            </ul>
            <button className="btn btn-success">Editar</button>
            <button className="btn btn-danger">Eliminar</button>
            <hr className="mt-4"></hr>
        </div>
    </div>
  );
}

export default IndividualUsuario;

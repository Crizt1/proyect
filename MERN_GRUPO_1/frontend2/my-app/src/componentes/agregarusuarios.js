import React, { useState} from "react";
import Axios from "axios"; //Comunica desde el front al backend

function AgregarUsuarios() {

  //Hooks: se usan para asignar valor al campo del formulario
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [users, setUsers] = useState([]);


    function createUser() {
        var usuario = {
            id: id,
            name: name,
            image: image,
            price: price,
            stock: stock,
        };

        //Axios
        try {
            Axios.post("/", usuario)
                .then((res) => {
                    alert(res.data);
                    console.log(usuario);
                })
                .catch((error) => {});
        } catch (error) {
            throw error;
        }
    }
    return (
<div className="conatiner text-center">
  <div className="row">
      <h2 className="mt-4">Crear nuevo Producto</h2>
  </div>

  <div className="row text-center">
      <div className="col-sm-6 offset-3 mt-4">
      <div className="mb-3">
      <label htmlFor="id" className="form-label mt-3">
      ID
      </label>
      <input
      type="id"
      className="form-control"
      value={id}
      onChange={(e) => {
        setId(e.target.value);
      }}
      ></input>
      </div>
      <div className="mb-3">
      <label htmlFor="name" className="form-label mt-3">
      Nombre
      </label>
      <input
      type="text"
      className="form-control"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
      ></input>
      </div>

      <div className="mb-3">
      <label htmlFor="image" className="form-label mt-3">
      Imagen
      </label>
      <input
      type="Buffer"
      className="form-control"
      value={image}
      onChange={(e) => {
        setImage(e.target.value);
      }}
      ></input>
      </div>

      <div className="mb-3">
      <label htmlFor="price" className="form-label mt-3">
      Precio
      </label>
      <input
      type="Number"
      className="form-control"
      value={price}
      onChange={(e) => {
        setPrice(e.target.value);
      }}
      ></input>
      </div>

      <div className="mb-3">
      <label htmlFor="stock" className="form-label mt-3">
      Stock
      </label>
      <input
      type="Number"
      className="form-control"
      value={stock}
      onChange={(e) => {
        setStock(e.target.value);
      }}
      ></input>
      </div>

      <button onClick={createUser} className="btn btn-dark active rounded-pill" data-bs-toggle="button" aria-pressed="true"><i className="bi bi-cart-plus"></i> Añadir Producto</button>
      </div>
  </div>
    </div>
      );
    }
    

export default AgregarUsuarios;

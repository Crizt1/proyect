import { DBconnection } from "./db.js";
import { PORT } from './config.js';
import app from './app.js';
DBconnection();


/*
      {
        "id": 1,
        "name": "Chaqueta negra cortavientos",
        "image": "frontend/IMAGENES/chaqueta1.jpg",
        "price": 69900,
        "stock": 50
       },
       {
        "id": 2,
        "name": "Chaqueta azul cielo cortavientos",
        "image": "frontend/IMAGENES/chaqueta2.jpg",
        "price": 59900,
        "stock": 50
       }, 
       {
        "id": 3,
        "name": "Chaqueta vino tinto cortavientos",
        "image": "frontendIMAGENES/chaqueta3.jpg",
        "price": 59900,
        "stock": 50
       }, 
       {
        "id": 7,
        "name": "Chaqueta azul oscuro cortavientos",
        "image": "frontend/IMAGENES/chaqueta7.jpg",
        "price": 59900,
        "stock": 50
       },
       {
        "id": 5,
        "name": "Chaqueta vino tinto cortavientos",
        "image": "frontend/IMAGENES/chaqueta5.jpg",
        "price": 59900,
        "stock": 50
       },
       {
        "id": 6,
        "name": "Chaqueta verde militar cortavientos",
        "image": "frontend/IMAGENES/chaqueta6.jpg",
        "price": 59900,
        "stock": 50
       } 

*/



app.listen(PORT);
console.log("Server listening on port: ", PORT);
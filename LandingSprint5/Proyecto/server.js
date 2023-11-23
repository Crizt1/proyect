const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Importa la biblioteca 'path'

const app = express();
const PORT = process.env.PORT || 4000;

// Conecta a MongoDB (reemplaza 'your-mongodb-uri' con tu URI real)
mongoose.connect('mongodb://localhost:27017/MyDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define un modelo para tus datos
const DatosModel = mongoose.model('Formulario', {
  nombre: String,
  celular: String,
  correo: String,
});

// Middleware para procesar datos JSON
app.use(express.json());

// Configura Express para servir archivos estáticos
app.use(express.static(path.join(__dirname, '..', 'Proyecto')));

// Ruta principal (GET) para servir la página HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Index.html'));
});

// Ruta para recibir los datos del formulario y guardarlos (POST)
app.post('/guardar-datos', async (req, res) => {
  try {
    const { nombre, celular, correo } = req.body;

    // Crea una nueva instancia del modelo
    const nuevoDato = new DatosModel({
      nombre,
      celular,
      correo,
    });

    // Guarda los datos en la base de datos
    await nuevoDato.save();

    res.status(200).json({ message: 'Datos guardados exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar los datos' });
  }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
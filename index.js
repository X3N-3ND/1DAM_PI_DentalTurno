const express = require("express");

const app = express();
const puerto = 3000;

// Cargar los archivos de la carpeta public en el servidor de Express.
app.use(express.static("public"));

// Iniciar el servidor.
app.listen(puerto, () => {
    console.log(`Servidor iniciado en http://localhost:${puerto}`);
});

const express = require("express");

const app = express();
const puerto = 3000;

// Ruta principal de TurnoDental.
app.get("/", (req, res) => {
    res.send("Bienvenido a TurnoDental");
});

// Iniciar el servidor.
app.listen(puerto, () => {
    console.log(`Servidor iniciado en http://localhost:${puerto}`);
});

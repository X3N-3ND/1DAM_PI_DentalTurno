const express = require("express");

const app = express();
const puerto = 3000;

// Ofertas de empleo de ejemplo.
const ofertas = [
    {
        id: 1,
        puesto: "Higienista dental",
        clinica: "Clínica Sonrisa Norte",
        ciudad: "Valencia",
        distanciaKm: 4.2,
        horario: "15:00 - 20:00",
        urgente: true
    },
    {
        id: 2,
        puesto: "Auxiliar dental",
        clinica: "Clínica Dental Ruzafa",
        ciudad: "Valencia",
        distanciaKm: 8.6,
        horario: "09:00 - 14:00",
        urgente: false
    },
    {
        id: 3,
        puesto: "Odontólogo general",
        clinica: "Clínica Dental Centro",
        ciudad: "Alzira",
        distanciaKm: 12.5,
        horario: "10:00 - 18:00",
        urgente: true
    }
];

// Ruta API que devuelve las ofertas en formato JSON.
app.get("/api/ofertas", (req, res) => {
    res.json(ofertas);
});

// Cargar los archivos de la carpeta public en el servidor de Express.
app.use(express.static("public"));

// Iniciar el servidor.
app.listen(puerto, () => {
    console.log(`Servidor iniciado en http://localhost:${puerto}`);
});

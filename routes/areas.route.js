const express = require("express");
const app = express();
const Area = require("../controllers/area.controller");
/* ruta para crear area */
app.post("/crear-area",Area.crearArea);
/* ruta para mostrar las areas de conocimiento */
app.get("/mostrar-areas",Area.mostrarAreas);
/* exportacion del modulo */
module.exports = app;
const express = require("express");
const app = express();
const Area = require("../controllers/area");

/* ruta para crear area */
app.post("/areas", Area.crearArea);

/* ruta para mostrar las areas de conocimiento */
app.get("/areas", Area.mostrarAreas);

/* exportacion del modulo */
module.exports = app;

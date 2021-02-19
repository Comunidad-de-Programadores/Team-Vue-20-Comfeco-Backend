const express = require("express");
const app = express();
const Taller = require("../controllers/talleres.controller");
/* ruta para crear taller */
app.post("/crear-taller",Taller.crearTaller);
/* todos los talleres */
app.get("/mostrar-talleres",Taller.mostrarTalleres);
/* todos los talleres */
app.get("/mostrar-talleres/:id",Taller.mostrarTalleresByArea);
module.exports=app;
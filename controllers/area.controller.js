// eslint-disable-next-line no-unused-vars
const { json } = require("body-parser");
const Area = require("../models/areas.model");
/* metodo para añadir un area*/
let crearArea=(req,res)=>{

  let body = req.body;
  /* validar si existe ela rea */
  Area.find({ area: `${body.area}` }, function(err, data) {
    if(err){
      return res.json({
        status:400,
        mensaje:"error en la db",
        err
      });}
    if(data.length != 0){
      return res.json({
        status:400,
        mensaje:"el area ya existe"
           
      });
    }
    let area = new Area({
      area:body.area
    });
    area.save((err,data)=>{
      if(err){
        return res.json({
          status:400,
          mensaje:"error al almacenar el area",
          err
        });
      }
      res.json({
        status:200,
        data,
        mensaje: "El area fuecreada con exito"
      });
    });
  });
  

};
/* metodo para listar las areas de conocimiento */
let mostrarAreas=(req,res)=>{
  Area.find({}).exec((err,data)=>{
    if(err){
      return res.json({
        status:500,
        mensaje:"error"
      });
    }
    Area.countDocuments({},(err,total)=>{
      if(err){
        return res.json({
          status:500,
          mensaje:"error"
        });
      }
      res.json({
        status:200,
        total,
        data
      });
    });
  });
};
/* exportacion de los metodos */
module.exports={
  crearArea,
  mostrarAreas
};
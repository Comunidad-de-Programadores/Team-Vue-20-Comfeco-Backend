// eslint-disable-next-line no-unused-vars
const { json } = require("body-parser");
const Taller = require("../models/talleres.model");

/* motodo para aladir un taller */
let crearTaller = (req,res)=>{
  let body = req.body;
  let taller = new Taller({
    title:body.title,
    description:body.description,
    referral:body.referral,
    time:body.time,
    area_id:body.area_id
  });

  taller.save((err,data)=>{
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
      mensaje: "El taller fue creado con exito"
    });
  });
};

let mostrarTalleres = (req,res) => {
  Taller.find({}).exec((err,data)=>{
    if(err){
      return res.json({
        status:500,
        mensaje:"error"
      });
    }
    Taller.countDocuments({},(err,total)=>{
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
/* traer talleres por area */
let mostrarTalleresByArea = (req,res) => {
  let id = req.params.id;
  Taller.find({area_id:`${id}`}).exec((err,data)=>{
    if(err){
      return res.json({
        status:500,
        mensaje:"error"
      });
    }
    res.json({
      status:200,
      data
    });
  });
};
/* exportacion de los metodos */
module.exports={
  crearTaller,
  mostrarTalleres,
  mostrarTalleresByArea
};
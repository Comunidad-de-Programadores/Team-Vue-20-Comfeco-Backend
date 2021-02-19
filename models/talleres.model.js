const mongoose = require ("mongoose");
/* esquema mongo para las áreas */
let Schema = mongoose.Schema;
let tallerSchema = new Schema({
  title:{
    type:String,
    requiere:[true,"se encesita un titulo"]
  },
  description:{
    type:String,
    require:[true,"se necesita una descripcion"]
  },
  referral:{
    type:String,
    require:[true,"se necesita un link de red social"]
  },
  time: { 
    type: Date, 
    default: Date.now 
  },
  organizer:{
    type:String,
    require:[true,"se necesita un nombre"]
  }
  ,
  area_id:{
    type:String,
    require:[true,"se necesita un area de conocimineto"]
  }
});

module.exports= mongoose.model("talleres",tallerSchema);
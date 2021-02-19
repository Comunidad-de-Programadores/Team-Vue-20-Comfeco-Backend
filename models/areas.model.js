const mongoose = require ("mongoose");
/* esquema mongo para las áreas */
let Schema = mongoose.Schema;
let areaSchema = new Schema({
  area:{
    type:String,
    require:[true,"se requiere el area"]
  }
});

module.exports = mongoose.model("areas",areaSchema);
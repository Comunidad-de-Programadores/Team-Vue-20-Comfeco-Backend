const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const BannsSchema = new Schema({
  user_id:String,
  event_id:String,
  reason:String
});

module.exports = mongoose.model("Banns", BannsSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EventsSchema= new Schema({
  tiltle:String,
  description:String,
  referral:String
});
module.exports= mongoose.model("events",EventsSchema);

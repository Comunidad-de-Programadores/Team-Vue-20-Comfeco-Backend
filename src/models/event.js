const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EventsSchema = new Schema({
  title: String,
  banner: String,
  description: String,
  referral: String,
});
module.exports = mongoose.model("Event", EventsSchema);

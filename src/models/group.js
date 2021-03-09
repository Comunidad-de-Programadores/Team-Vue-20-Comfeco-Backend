const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GroupSchema = new Schema({
  name: String,
  lang:String,
  description:String
});
module.exports = mongoose.model("Group",GroupSchema);
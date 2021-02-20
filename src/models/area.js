const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
  type: String,
  require: [true, "This field is required"],
});

module.exports = mongoose.model("Area", AreaSchema);

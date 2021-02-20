const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkshopSchema = new Schema({
  title: String,
  description: String,
  referral: String,
  time: {
    type: Date,
    default: Date.now,
  },
  organizer: String,
  area_id: String,
});

module.exports = mongoose.model("Workshop", WorkshopSchema);

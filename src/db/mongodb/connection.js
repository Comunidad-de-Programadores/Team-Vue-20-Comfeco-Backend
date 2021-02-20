require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URL;

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = mongoose.connection;

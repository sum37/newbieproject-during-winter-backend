const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    happy: String,
    angry: String,
    sad: String,
    joy: String,
    date: Date,
    title: String,
    body : String
  });
  const InputModel = mongoose.model("diary", schema);
  
  module.exports = InputModel

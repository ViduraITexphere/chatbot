const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  // Other properties of your schema go here if needed
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;

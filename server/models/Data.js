const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  id: {
    type: Number,
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

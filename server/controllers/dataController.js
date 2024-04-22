const Data = require("../models/Data");

exports.insertData = async (req, res) => {
  try {
    const dataToInsert = {
      model: req.body.model,
      id: req.body.id,
    };

    const newData = new Data(dataToInsert);
    const savedData = await newData.save();
    res.send("Data inserted successfully: " + savedData);
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
};

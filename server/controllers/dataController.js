const Data = require("../models/Data");

// Insert data into the database
exports.insertData = async (req, res) => {
  try {
    const dataToInsert = {
      title: req.body.title,
      model: req.body.model,
    };

    const newData = new Data(dataToInsert);
    const savedData = await newData.save();

    // Extract the generated _id from the saved document
    const generatedId = savedData._id;
    console.log("Data inserted successfully with ID:", generatedId);

    res.send(
      "Data inserted successfully with ID: " + generatedId + "\n" + savedData
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
};

// Fetch all projects from the database
exports.getProjects = async (req, res) => {
  try {
    const projects = await Data.find(); // Fetch all projects from the database
    res.json(projects); // Send the projects as JSON response
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).send("Error fetching projects");
  }
};

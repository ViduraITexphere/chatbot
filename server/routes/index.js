const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.post("/insertData", dataController.insertData);

module.exports = router;

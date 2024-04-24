const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.post("/insertData", dataController.insertData);
router.get("/getProjects", dataController.getProjects);

module.exports = router;

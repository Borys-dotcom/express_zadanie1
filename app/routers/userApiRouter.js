const express = require("express");
const router = express.Router();

const userApiController = require("../controllers/userApiController")

router.get("/", userApiController.findAll)

module.exports = router;
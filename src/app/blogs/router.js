

const express = require("express");

const router = express.Router();

var controller = require('./controller');

router.post("/singleupload", controller.singleupload);
router.post("/multipleupload", controller.multipleupload);
module.exports = router;

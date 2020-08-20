const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validateToken = require( "../../middlewares/validateToken" );

router.post("/create", controller.create);
router.put("/update", controller.update);
router.get("/get", controller.get);

module.exports = router;
const express = require("express");
const addNewUser = require("../controllers/usersControllers");
const router = express.Router();

router.post("/sign-up", addNewUser)

module.exports = router;
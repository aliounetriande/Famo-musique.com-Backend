const express = require("express");
const { addNewUser, userLogin } = require("../controllers/usersControllers");
const router = express.Router();

router.post("/sign-up", addNewUser);
router.post("/login", userLogin)

module.exports = router;
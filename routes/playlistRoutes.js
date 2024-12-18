const express = require("express");
const { createPlaylist, updatePlaylist, deletePlaylist } = require("../controllers/playlistsControllers");
const authenticate = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", authenticate, createPlaylist);
router.put("/update/:id", authenticate, updatePlaylist);
router.delete("/delete/:id", authenticate, deletePlaylist);

module.exports = router;
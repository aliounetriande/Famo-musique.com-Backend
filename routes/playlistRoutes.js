const express = require("express");
const { createPlaylist, updatePlaylist, deletePlaylist, getPlaylists, getOnePlaylist, addPlaylistToFavorites, removePlaylistFromFavorites } = require("../controllers/playlistsControllers");
const authenticate = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/my-playlists", authenticate, getPlaylists);
router.get("/show-playlist/:id", authenticate, getOnePlaylist);
router.post("/create", authenticate, createPlaylist);
router.put("/update/:id", authenticate, updatePlaylist);
router.delete("/delete/:id", authenticate, deletePlaylist);
router.get("/add-playlist-to-favorites", authenticate, addPlaylistToFavorites)
router.get("/remove-playlist-from-favorites", authenticate, removePlaylistFromFavorites)

module.exports = router;
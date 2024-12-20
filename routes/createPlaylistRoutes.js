//createPlaylistRoutes

import express from 'express';
import { createPlaylist } from '../controllers/playlistControllers.js';

const router = express.Router();

router.post("/playlist/create", createPlaylist);

export default router;

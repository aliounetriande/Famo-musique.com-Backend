import express from 'express';
import { showForm, createPlaylist, getPlaylist, updatePlaylist, deletePlaylist } from '../controllers/playlistControllers.js';

const router = express.Router();

router.get('/playlist/show-form', showForm);
router.post('/playlist/create', createPlaylist);
router.get('/playlist/:id', getPlaylist);
router.put('/playlist/:id/update', updatePlaylist);
router.delete('/playlist/:id/delete', deletePlaylist);

export default router;

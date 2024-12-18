const Playlist = require("../models/Playlist");
const User = require("../models/User");

const createPlaylist = async (req, res) => {
    try {
        const { name, desc, image } = req.body;
        const userId = req.user.userId; // Récupère l'ID utilisateur depuis le middleware

        const newPlaylist = await Playlist.create({
            name,
            desc,
            image,
            userId
        });

        res.status(201).json({ message: 'Playlist created successfully', playlist: newPlaylist });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updatePlaylist = async (req, res) => {
    try {
        const playlistId = req.params.id;
        const userId = req.user.userId; // Récupère l'ID utilisateur depuis le middleware

        const playlist = await Playlist.findOne({ _id: playlistId, userId }); // Vérifie que la playlist appartient à l'utilisateur

        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found or not owned by the user' });
        }

        const updatedPlaylist = await Playlist.findByIdAndUpdate(
            playlistId,
            { ...req.body }, // Met à jour les champs fournis
            { new: true } // Renvoie la playlist mise à jour
        );

        res.status(200).json({ message: 'Playlist updated successfully', playlist: updatedPlaylist });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletePlaylist = async (req, res) => {
    try {
        const playlistId = req.params.id;
        const userId = req.user.userId; // Récupère l'ID utilisateur depuis le middleware

        const playlist = await Playlist.findOne({ _id: playlistId, userId }); // Vérifie que la playlist appartient à l'utilisateur

        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found or not owned by the user' });
        }

        await Playlist.findByIdAndDelete(playlistId);

        res.status(200).json({ message: 'Playlist deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




module.exports = {createPlaylist, updatePlaylist, deletePlaylist}
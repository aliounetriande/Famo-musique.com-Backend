const Playlist = require("../models/Playlist");
const User = require("../models/User");

const createPlaylist = async (req, res) => {
    try {
        const { name, desc, image, userId } = req.body;
        
        const newPlaylist = await Playlist.create({
            name,
            desc,
            image,
            userId
        });
        console.log('====================================');
        console.log(newPlaylist);
        console.log('====================================');
        res.status(201).json({ message: 'Playlist created successfully', playlist: newPlaylist });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOnePlaylist = async (req, res) => {
    console.log('====================================');
    console.log("try");
    console.log('====================================');
    try {
        const playlistId = req.params.id;
        // const userId = req.user.userId; // Récupère l'ID utilisateur depuis le middleware
        const userId = req.header('userId');

        const playlist = await Playlist.findOne({ _id: playlistId }); // Vérifie que la playlist appartient à l'utilisateur
        console.log('====================================');
        console.log(playlistId);
        console.log('====================================');
        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found or not owned by the user' });
        }
        return res.status(200).json({ playlist });
    } catch (error) {
        console.error(error);
        
    }
}

const updatePlaylist = async (req, res) => {
    try {
        const playlistId = req.params.id;
        // const userId = req.user.userId; // Récupère l'ID utilisateur depuis le middleware
        const userId = req.header('userId');

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
        // const userId = req.user.userId; // Récupère l'ID utilisateur depuis le middleware
        const userId = req.header('userId');

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

const getPlaylists = async (req, res) => {
    try {
        const id = req.header('userId');
        

        const playlists = await Playlist.find({userId: id})
        // console.log('====================================');
        // console.log(playlists);
        // console.log('====================================');
        if (!playlists) {
            res.status(204);
        } else {
            res.status(200).json({playlists: playlists});
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {createPlaylist, updatePlaylist, deletePlaylist, getPlaylists, getOnePlaylist}
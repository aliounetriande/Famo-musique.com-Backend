import Playlist from "../models/Playlist.js";

// Fonction pour afficher le formulaire de création de playlist
export async function showForm(req, res) {
  res.send('Show playlist form');
}

// Fonction pour créer une nouvelle playlist
export async function createPlaylist(req, res) {
  const { name, description } = req.body;
  const playlist = new Playlist({
    name,
    description
  });

  try {
    const savedPlaylist = await playlist.save();
    res.status(201).json(savedPlaylist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Fonction pour obtenir une playlist par son ID
export async function getPlaylist(req, res) {
  try {
    const playlist = await Playlist.findById(req.params.id).populate('user');
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Fonction pour mettre à jour une playlist par son ID
export async function updatePlaylist(req, res) {
  const { name, description } = req.body;
  try {
    const playlist = await Playlist.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Fonction pour supprimer une playlist par son ID
export async function deletePlaylist(req, res) {
  try {
    const playlist = await Playlist.findByIdAndDelete(req.params.id);
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json({ message: 'Playlist deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

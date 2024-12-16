const mongoose = require("mongoose");
const FavListPlaylistSchema = new mongoose.Schema({
    
    playlistId : {type: mongoose.Schema.Types.ObjectId, ref: 'Playlist'},
    favListId : {type: mongoose.Schema.Types.ObjectId, ref: 'FavList'}
})

module.exports = mongoose.model("FavListPlaylist", FavListPlaylistSchema);
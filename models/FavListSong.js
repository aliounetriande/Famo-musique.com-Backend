const mongoose = require("mongoose");
const FavListSongSchema = new mongoose.Schema({
    
    songId : {type: mongoose.Schema.Types.ObjectId, ref: 'Song'},
    favListId : {type: mongoose.Schema.Types.ObjectId, ref: 'FavList'}
})

module.exports = mongoose.model("FavListSong", FavListSongSchema);
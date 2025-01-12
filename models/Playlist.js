const mongoose = require("mongoose");
const PlaylistSchema = new mongoose.Schema({
    name : {type: String, required: true},
    desc : {type: String, required: true},
    image : {type: String, required: false},
    userId : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    isFavorite: { type: Boolean, required: false }
})

module.exports = mongoose.model("Playlist", PlaylistSchema);
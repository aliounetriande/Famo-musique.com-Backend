const mongoose = require("mongoose");
const PlaylistSchema = new mongoose.Schema({
    name : {type: String, required: true},
    desc : {type: String, required: true},
    image : {type: String, required: true},
    userId : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model("Playlist", PlaylistSchema);
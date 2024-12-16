const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
    title : {type: String, required: true},
    singer : {type: String, required: true},
    image : {type: String, required: true},
    file : {type: String, required: true},
    duration : {type: int, required: true},
    category : {type: String, required: true},
    userId : {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model("Song", songSchema);
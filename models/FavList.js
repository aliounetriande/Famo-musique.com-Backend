const mongoose = require("mongoose");
const FavListSchema = new mongoose.Schema({
    
    userId : {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model("FavList", FavListSchema);
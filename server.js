const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const usersRoutes = require("./routes/usersRoutes");
const playlistRoutes = require("./routes/playlistRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send("hello")
})

app.use("/user", usersRoutes)
app.use("/playlist", playlistRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, '172.16.5.32', () => console.log(`Server running on port ${PORT}`));
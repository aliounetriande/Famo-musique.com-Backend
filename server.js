import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js";
import playlistRoutes from "./routes/playlistRoutes.js";
import authMiddleware from "./middlewares/authMiddleware.js";

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
app.use("/user", authMiddleware)
app.use("/user", playlistRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, 'localhost', () => console.log(`Server running on port ${PORT}`));

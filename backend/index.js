const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();
colors.enable();

const Anim = require("./database/anim.model");
const connect = require("./database/connect");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hello Mama!".rainbow);

  res.send("Hello Mamasd!");
});

app.get("/api/anime", async (req, res) => {
  const anime = await Anim.find();
  console.log("get animes");
  console.log(anime);
  res.status(200).json(anime);
});

app.post("/api/setAnime", async (req, res) => {
  const anime = new Anim(req.body);
  await anime.save();
  console.log("post anime");
  console.log(anime);
  res.status(200).json(anime);
});

app.listen(8000, () => {
  console.log("server listening on port 8000");

  // connect to the database
  connect();
});

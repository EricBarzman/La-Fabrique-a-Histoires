const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;


const express = require("express");
const router = require("./app/router");
const app = express();

// !! Changer l'adresse lors du déploiement
// Cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use('/uploads', express.static('uploads'));

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`En écoute sur le port ${PORT}...`);
});

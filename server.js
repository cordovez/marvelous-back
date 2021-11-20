require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

////  ROUTES ////
// make landing page show all the characters //
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});
// /comics pages shows all the comics //
app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});
// show comics with specific characters//
// app.get("/comics/:characterID", async (req, res) => {
//   try {
//     const response = await axios.get(
//       `https://lereacteur-marvel-api.herokuapp.com/comics/${characterID}?apiKey=${process.env.API_KEY}`
//     );
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

app.all("*", (req, res) => {
  res.status(404).json({ message: "That page does not exist" });
});

//// LAUNCH SERVER ///
app.listen(5000, () => {
  console.log("Server started 🍾 ");
});

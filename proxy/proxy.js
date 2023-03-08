const express = require("express");
const request = require("request");

const app = express();
const searchQuery = "cafes";
const apiKey = "AIzaSyAhdjzesX4A_FSVow1BGPfym7aoisYlNdU";
const API_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${apiKey}`; // Replace this URL with your own

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api", (req, res) => {
  request({ url: `${API_URL}` }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: "error", message: error.message });
    }

    res.json(JSON.parse(body));
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

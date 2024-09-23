const express = require("express");
const cors=require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const apidata = require("./data.json"); // Ensure data.json is in the correct path

// Root route
app.get("/", (req, res) => {
  res.send("Hello, it's my first API");
});

// Service route to return the data
app.get("/service", (req, res) => {
  res.json(apidata);  // Sending the JSON data
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/* eslint-env node */
const express = require("express");
const { exec } = require("child_process");
const app = express();

app.get("/start-webcam", (req, res) => {
  exec("python main.py", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error}`);
      res.status(500).send("Error starting webcam.");
    } else {
      res.send("Webcam started!");
    }
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));

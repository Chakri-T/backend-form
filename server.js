const express = require("express");
const app = express();
const port = 8080;

app.get("/send", (req, res) => {
  res.send("Response is sent successfully");
});
app.listen(port, () => {
  console.log("Server is started");
});

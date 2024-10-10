const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employeeRoutes");

const port = 8080;

dotEnv.config();
app.use(bodyParser.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database is connected succesfully");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

app.use("/employees", employeeRoutes);
app.listen(port, () => {
  console.log("Server is started");
});

const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
var corsOptions = {
  origin: '*'
};
app.use(cors(corsOptions));

app.use(require("./routes"));

require("./db_config");

// set port, listen for requests
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Port: ${PORT} ✅`);
});
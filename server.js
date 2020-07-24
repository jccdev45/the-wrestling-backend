const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const router = require("./routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/", router);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

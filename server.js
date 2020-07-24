const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/", router);

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
//   app.options("*", (req, res) => {
//     // allowed XHR methods
//     res.header(
//       "Access-Control-Allow-Methods",
//       "GET, PATCH, PUT, POST, DELETE, OPTIONS"
//     );
//     res.send();
//   });
// });

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

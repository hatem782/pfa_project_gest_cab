const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const app = express();
const connectDB = require("./Database/mongo.connect");
const Routes = require("./routes/Main.routes");
// const Timer = require("./Tasks/Timer");

const corstAllowAll = {
  credentials: true,
  origin: true,
  "Access-Control-Allow-Origin": "*",
};

dotenv.config();
app.use(cors(corstAllowAll));
app.options("*", cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(
  fileupload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

app.listen(process.env.PORT || 8080, () => {
  console.log(process.env.PORT);
  connectDB();
  //   Timer.Timer();
});

app.get("/", (req, res) => {
  const resu =
    "<h1>Welcome to ISAMM PFA PROJET :  " + process.env.PORT + "</h1>";
  res.send(resu);
});

app.get("/test", (req, res) => {
  const resu = "<h1>this is just a test</h1>";
  res.send(resu);
});

app.use("/api", Routes);

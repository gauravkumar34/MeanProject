const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

const app = express();

const route = require("./routes/route");

//connect to mongoDB
mongoose.connect("mongodb://localhost:27017/contactlist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//on connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database mongodb");
});
//for database error
mongoose.connection.on("error", (err) => {
  if (err) {
    console.log("Error in database");
  }
});

//port no
const port = process.env.PORT || 8080;

//adding middleware
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use("/public", express.static(path.join(__dirname, "/public")));

//routes
app.use("/api", route);

//testing Server
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => console.log("Server is running on port 3000"));

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://rajasyah:rajasyah20032003@localhost:27017/eduwork-mongoose?authSource=eduwork"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("connected to server database"));

const { MongoClient } = require("mongodb");

const url =
  "mongodb://rajasyah:rajasyah20032003@localhost:27017?authSource=eduwork";
const client = new MongoClient(process.env.MONGODB_URI || url);

(async () => {
  try {
    await client.connect();
    console.log("Connecting to mongodb was successfully");
  } catch (e) {
    console.log(e);
  }
})();

const db = client.db("eduwork");

module.exports = db;

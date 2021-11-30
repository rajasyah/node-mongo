require("./config/mongoose");
const express = require("express");
const app = express();
const home = require("./router/home");
const productRouter = require("./router/products");
const productRouter2 = require("./router/productMongoose");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(home);
app.use("/api/v1", productRouter);
app.use("/api/v2", productRouter2);

app.listen(process.env.PORT || 3000, () =>
  console.log("Server running at http://localhost:3000")
);

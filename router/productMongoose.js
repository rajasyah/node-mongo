const router = require("express").Router();
const Product = require("../models/products");

// const productController =

router.get("/products", (req, res) => {
  Product.find()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

router.post("/products", (req, res) => {
  const { name, price, stock, status } = req.body;
  Product.create({ name, price, stock, status })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

module.exports = router;

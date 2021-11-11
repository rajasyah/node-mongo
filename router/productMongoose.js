const router = require("express").Router();
const { ObjectId } = require("bson");
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

router.put("/products/:id", (req, res) => {
  const { name, price, stock, status } = req.body;
  const { id } = req.params;
  Product.updateOne({ id }, { name, price, stock, status })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  Product.deleteOne({ _id: ObjectId(id) })
    .then(() => res.send("delete success"))
    .catch((error) => res.send(error));
});

module.exports = router;

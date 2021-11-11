const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "field name must exist"],
    minlength: 3,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 10,
    max: 100000000,
  },
  stock: Number,
  status: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

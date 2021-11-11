const router = require("express").Router();
const productController = require("../controllers/product");

router.get("/products", productController.index);
router.get("/products/:id", productController.view);
router.post("/products/", productController.store);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.deletes);

module.exports = router;

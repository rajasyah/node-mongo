const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "welcome to Mongodb",
  });
});

module.exports = router;

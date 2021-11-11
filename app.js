const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send({
    status: "success",
    message: "Welcome ",
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Server running at http://localhost:3000")
);

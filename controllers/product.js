const { ObjectId } = require("bson");
const db = require("../config/mongodb");

const index = (req, res) => {
  db.collection("products")
    .find()
    .toArray()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

const view = (req, res) => {
  const { id } = req.params;
  db.collection("products")
    .findOne({ _id: ObjectId(id) })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

const store = (req, res) => {
  const { name, price, stock, status } = req.body;
  db.collection("products")
    .insertOne({ name, price, stock, status })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

const update = (req, res) => {
  const { id } = req.params;
  const { name, price, stock, status } = req.body;
  db.collection("products")
    .findOneAndReplace({ _id: ObjectId(id) }, { name, price, stock, status })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

const deletes = (req, res) => {
  const { id } = req.params;
  db.collection("products")
    .deleteOne({ _id: ObjectId(id) })
    .then(() => res.send("delete succes"))
    .catch((error) => res.send(error));
};

module.exports = {
  index,
  view,
  store,
  update,
  deletes,
};

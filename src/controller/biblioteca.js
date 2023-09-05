const books = require("../bd");

const listLibrary = (req, res) => {
  res.status(200).send(books);
};

module.exports = {
  listLibrary,
};

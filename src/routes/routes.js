const express = require("express");
const routes = express();
const {
  listLibrary,
  addBook,
  AlterBook,
  replaceBook,
} = require("../controller/biblioteca");

routes.get("/livros/:id?", listLibrary);
routes.post("/livros", addBook);
routes.put("/livros/:id", replaceBook);
routes.patch("/livros/:id", AlterBook);

module.exports = routes;

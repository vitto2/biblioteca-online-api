const express = require("express");
const routes = express();
const { listLibrary, addBook } = require("../controller/biblioteca");

routes.get("/livros/:id?", listLibrary);
routes.post("/livros", addBook);

module.exports = routes;

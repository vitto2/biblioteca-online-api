const express = require("express");
const routes = express();
const { listLibrary } = require("../controller/biblioteca");

routes.get("/livros/:id?", listLibrary);

module.exports = routes;

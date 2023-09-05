const express = require("express");
const routes = express();
const { listLibrary } = require("../controller/biblioteca");

routes.get("/livros", listLibrary);

module.exports = routes;

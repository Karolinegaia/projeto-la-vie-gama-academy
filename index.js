const express = require("express");
const server = express();
const routes = require("./src/routes")
const dbase = require("./src/database");

dbase.hasConection()
server.use(express.json())
server.use(routes)
server.listen(3000, () => console.log('Servidor na porta 3000'))
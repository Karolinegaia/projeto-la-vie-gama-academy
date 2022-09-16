const express = require("express")
const psychologistsController = require("../controllers/psychologistsController")
// const atendimentoController = require("../controllers/atendimentoController")
const authController = require("../controllers/authControllers")
const authLoginValidation = require("../validations/auth/login");
const routes = express.Router();

// routes.get("/atendimento", atendimentoController.listarAtendimentos)
// routes.get("/atendimento/:id", atendimentoController.atendimentoId)
// routes.post("/atendimento", atendimentoController.cadastrarAtendimento)
routes.post("/login", authLoginValidation, authController.login)
// routes.post("/psicologos", psychologistsController.registerPsychologists)
// routes.get("/psicologos/list", psychologistsController.listPsychologists);
// routes.delete("/psicologos/:id", psychologistsController.deletarPsicologo);

module.exports = routes
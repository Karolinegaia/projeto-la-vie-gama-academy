const express = require("express")
const psychologistsController = require("../controllers/psychologistsController")
const patientController = require('../controllers/patientController');
const serviceController = require("../controllers/serviceControllers")
const authController = require("../controllers/authControllers")
const authLoginValidation = require("../validations/auth/login");
const routes = express.Router();

routes.get("/atendimento", serviceController.listService)
routes.get("/atendimento/:id", serviceController.serviceId)
routes.post("/atendimento", serviceController.registerService)
routes.post("/login", authLoginValidation, authController.login)

routes.post('/patients',patientController.registerPatient);
routes.get('/patients',patientController.listPatients);
routes.get('/patients/:id',patientController.listPatientId);
routes.put('/patients/:id',patientController.updatePatient);
routes.delete('/patients/:id',patientController.deletePatient);

routes.post("/psychologists", psychologistsController.registerPsychologists)
routes.get("/psychologists/list", psychologistsController.listPsychologists);
routes.get("/psychologists/:id", psychologistsController.getPsychologistById)
routes.delete("/psychologists/:id", psychologistsController.deletePsychologists);
routes.put("/psychologists/:id", psychologistsController.updatePsychologists);

module.exports = routes
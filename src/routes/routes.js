const express = require('express');
const patientController = require('../controller/patientController');
const authController = require ("../controller/authController");
const authLoginValidation = require ("../validations/login");

const routes = express.Router();

routes.post('/patients',patientController.registerPatient);
routes.get('/patients',patientController.listPatients);
routes.get('/patients/:id',patientController.listPatientId);
routes.put('/patients/:id',patientController.updatePatient);
routes.delete('/patients/:id',patientController.deletePatient);


module.exports = routes;
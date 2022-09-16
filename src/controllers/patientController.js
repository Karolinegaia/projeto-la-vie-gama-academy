const Patients = require('../models/Patients');

const patientController = {
  registerPatient: async (req, res) => {
    try {
      const { nome, email, idade } = req.body;
      if (!nome || !email || !idade) return res.status(400).json('Preencha todos os campos!');

      const newPatient = await Patients.create({
        nome,
        email,
        idade,
      });
      res.status(201).json(newPatient);

    } catch (err) {
      console.error(err);
    }
  },

  listPatients: async (req, res) => {
    try {
      const listPatients = await Patients.findAll();

      res.status(200).json(listPatients);
    } catch (err) {
      console.error(err);
    }

  },

  listPatientId: async (req, res) => {
    try {
      const { id } = req.params;

      const patientId = await Patients.findByPk(id);
      if (patientId !== null) {
        res.status(200).json(patientId);
      }
      else {
        res.status(404).json('Id não encontrado.')
      }

    } catch (err) {
      console.error(err);
    }

  },

  updatePatient: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, idade } = req.body;
      const patientId = await Patients.findByPk(id);

      if (patientId !== null) {
        if (!nome || !email || !idade) return res.status(400).json('Preencha todos os campos!');
        const patientUpdated = await Patients.update({
          nome,
          email,
          idade,
        },
          {
            where: {
              paciente_id: id,
            },
          });
        const patient_id = await Patients.findByPk(id)
        res.status(200).json(patient_id)
      }
      else {
        res.status(404).json('Id não encontrado.')
      }
    } catch (err) {
      console.error(err);
    }
  },

  deletePatient: async (req, res) => {
    try {
      const { id } = req.params;
      const patientId = await Patients.findByPk(id);
      if (patientId !== null) {
        await Patients.destroy({
          where: {
            paciente_id: id,
          },
        });
        res.sendStatus(204);
      } else {
        res.status(404).json('Id não encontrado');
      }

    } catch (err) {
      console.error(err);
    }

  }
};

module.exports = patientController;
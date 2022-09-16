const Psychologists = require ('./Psychologists');
const Services = require ('./Services');
const Patients = require ('./Patients');

Services.belongsTo(Patients, {
    foreignKey: 'Pacientes_paciente_id'
});

Patients.hasMany(Services, {
    foreignKey: 'Pacientes_paciente_id'
});

Services.belongsTo(Psychologists, {
    foreignKey: 'Psicologos_psicologo_id'
});

Psychologists.hasMany(Services, {
    foreignKey: 'Psicologos_psicologo_id'
});

module.exports = {
    Psychologists,
    Services,
    Patients,
};
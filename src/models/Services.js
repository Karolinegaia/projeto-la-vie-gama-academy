const dbase = require ('../database');
const {DataTypes} = require('sequelize')
const Psychologists = require('./Psychologists')
const Patients = require('./patients')

const Services = dbase.define("Atendimento",{
    atendimento_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data: {
      type: DataTypes.DATE
    },
    observacao: {
      type: DataTypes.TEXT
    },
    Psicologos_psicologo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Psychologists, 
        foreignKey: 'Psicologos_psicologo_id'
      }
    },
    Pacientes_paciente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Patients,
        foreignKey: 'Pacientes_paciente_id'
      }
    }
  },
  {
    timestamps: false,
  },
  {
    tableName: "atendimentos"
  });
  
  module.exports = Services
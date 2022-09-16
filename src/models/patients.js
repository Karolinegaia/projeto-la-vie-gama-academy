const dbase = require('../database');
const { DataTypes } = require('sequelize');

const Patients = dbase.define(
  'pacientes',
  {
    paciente_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    idade: {
      type: DataTypes.DATE,
    }
  },
  {
    timestamps: false,
  },
  {
    tableName: 'pacientes',
  }
);

module.exports = Patients;
const dbase = require ('../database');
const {DataTypes} = require('sequelize')

const Service = dbase.define("Atendimento",{
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
      type: DataTypes.INTEGER
    },
    Pacientes_paciente_id: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: false,
  },
  {
    tableName: "atendimentos"
  });
  
  module.exports = Service
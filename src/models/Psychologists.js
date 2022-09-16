const dbase = require('../database')
const {DataTypes} = require('sequelize')

const Psychologists = dbase.define("Psicologos",{
  psicologo_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  senha: {
    type: DataTypes.TEXT
  },
  apresentacao: {
    type: DataTypes.STRING
  },
}, {
    timestamps: false,
},
{
  tableName: "psicologos"
});

module.exports = Psychologists
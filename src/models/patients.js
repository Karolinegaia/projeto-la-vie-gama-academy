const db = require('../database/config');
const { DataTypes } = require('sequelize');

const Patients = db.define(
    'Patients',
    {
        id: {
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
        tableName: 'patients',
    }
);

module.exports = Patients;
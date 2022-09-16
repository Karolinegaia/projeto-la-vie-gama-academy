const {Sequelize} = require("sequelize");

const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
}

let dbase;
try {
  dbase = new Sequelize("lavie", "root", "mysql", DB_CONFIG)
} catch {
  console.log('Não conectado ao banco de dados')
}

async function hasConection(){
  try {
    await dbase.authenticate();
    console.log('Conectado ao banco de dados')
  } catch(error) {
    console.log(error)
  }
}

Object.assign(dbase, {hasConection})
module.exports = dbase
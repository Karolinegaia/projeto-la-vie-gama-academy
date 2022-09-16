const Psychologists = require('../models/Psychologists');
const jwt = require("jsonwebtoken")
const secret = require("../configs/secret")
const bcrypt = require("bcryptjs");

const authController = {
  async login(req, res){
    const {email, senha} = req.body

    const psychologist = await Psychologists.findOne({
      where: {
        email,
      }
    })
    if(!psychologist){
      res.status(404)
    }
    const token = jwt.sign({
      id: psychologist.id,
      nome: psychologist.nome,
      email: psychologist.email,
    }, secret.key)
    if(!bcrypt.compareSync(senha, psychologist.senha)){
      return res.status(401).json('Email ou senha inválida, verifique e tente novamente')
    }
    return res.status(200).json(token)
  }
}

module.exports = authController
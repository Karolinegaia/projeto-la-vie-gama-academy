const Psychologists = require('../models/Psychologists')
const bcrypt = require("bcryptjs")

const psychologistsController = {
  async registerPsychologists(req, res){
    const {nome, email, senha, apresentacao} = req.body
    const newPassword = bcrypt.hashSync(senha, 10)
    const newPsichologist = await Psychologists.create({
      nome,
      email,
      senha: newPassword,
      apresentacao,
    })
    res.status(201).json(newPsichologist)
  },

  async listPsychologists(req, res){
    try {
        const listPsychologists = await Psychologists.findAll()
        res.json(listPsychologists)
    } catch (error) {
        res.status(500).json("Erro ao listar psicologos")
        console.error('Não foi possivel listar')
        console.log('Não foi possivel listar psicologos')
    }
},

async deletarPsicologo(req,res){
  try {
      const {psicologo_id} = req.params;
      
      await Psychologists.destroy({
          where:{psicologo_id},
      },
      res.status(201),
      res.json('Psicólogo deletado com sucesso!'));

  } catch (error) {
      console.log('Não foi possivel deletar o psicólogo!');
      console.error(error);
      res.status(500);
  }
},
};

module.exports = psychologistsController;
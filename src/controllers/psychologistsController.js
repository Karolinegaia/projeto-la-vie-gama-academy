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

  async deletePsychologists(req,res){
    try {
      const {id} = req.params;
        
      await Psychologists.destroy({
        where: {
          psicologo_id: id
        },
      },
      res.status(201),
      res.json('Psicólogo deletado com sucesso!'));

    } catch (error) {
        console.log('Não foi possivel deletar o psicólogo!');
        console.error(error);
        res.status(500);
    }
  },

  async updatePsychologists(req, res){
    try {
        const {id} = req.params;
        const {nome,email,senha,apresentacao} = req.body;
        const psychologistUpdated = await Psychologists.update({
          nome,
          email,
          senha,
          apresentacao},
          {
            where: {
            psicologo_id: id
            },
          });
        res.json('Cadastro atualizado')
        res.status(201)
  
    } catch (error) {
        console.error(error);
        console.log('Não foi possivel atualizar as informações');
        res.status(500);
    }
  },

  async getPsychologistById(req, res){
    try {
      const {id} = req.params
      const response = await Psychologists.findByPk(id)
      res.json(response)
    } catch (error) {
        console.error(error);
        console.log('Não foi possivel listar psicologo');
        res.status(404)
    }
  }
};

module.exports = psychologistsController;
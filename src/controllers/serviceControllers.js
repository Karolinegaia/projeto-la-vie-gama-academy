const { Services , Patients , Psychologists} = require('../models');

const serviceController = {
    listService: async (req, res) =>  {
        try {
            const listService = await Services.findAll();    

            res.status(200).json(listService)
        } catch (error){
            console.error (error);
        }
    },  
    
    serviceId: async (req, res) => {
        try {
            const {id} = req.params;
            const serviceId = await Services.findByPk (id, {
            include: [{
                model: Psychologists
            },{
                model: Patients
            }] 
            });
            if (serviceId !== null){
                res.status(200).json(serviceId)   
            }
            else {
                res.status(404).json('Id não encontrado!')
            }
        } catch (error) {
            console.error(error);
        }
    },

    async registerService(req, res) {
        try {

            const {data, observacao, Psicologos_psicologo_id, Pacientes_paciente_id} = req.body;
            const newService = await Services.create({
                data,
                observacao,
                Psicologos_psicologo_id,
                Pacientes_paciente_id
            })

            res.status(201).json(newService)
        } catch (error){
           console.error(error);
        }
    }
}

module.exports = serviceController;
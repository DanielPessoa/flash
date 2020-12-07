const  empresas  = require('../models/Empresa')
//const funcionarios = require('../models/Funcionario')

module.exports = {
    addEmpresa (_, { dadosEmpresa }){
        const addEmpresa = new empresas(dadosEmpresa);
        return addEmpresa.save();
    },
    /*addFuncionario (_, { dadosFuncionario }){
        const addFuncionario = new funcionarios(dadosFuncionario);
        return addFuncionario.save();
    }*/
     
    
    
}
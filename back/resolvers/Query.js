const  empresas  = require('../models/Empresa')
//const  funcionarios  = require('../models/Funcionario')

module.exports = {
    empresas() {
        return empresas.find();
    },
    /*funcionarios(){
        return funcionarios.find();
    },*/
    funcPorEmpresa(_, id ){
        return  empresas.findById(id);
    }   
}
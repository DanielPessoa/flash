const mongoose = require('mongoose');

const EmpresaSchema = mongoose.Schema({
    //_id: Object,
    nome: String,
    Nome_Fantasia: String,
    CNPJ: String,
    benef_escolhidos: String,
    funcionarios: {
        nomeEmpresa: String,
        nome: String,
        sobrenome: String,
        cpf: String,
        email: String
    }
})

module.exports = mongoose.model("empresas", EmpresaSchema)
const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb+srv://rcdsg2021:Rc_200822@billing-cycles-backend.fggn0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O {PATH} '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."

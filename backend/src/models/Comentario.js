require('../config/mongoConnection')

const { Schema, model } = require('mongoose');

function dataAtualFormatada() {
	let data = new Date();
        let dia  = data.getDate().toString();
        let diaF = (dia.length == 1) ? '0' + dia : dia
        let mes  = (data.getMonth()+1).toString(); //+1 pois no getMonth() Janeiro começa com zero.
        let mesF = (mes.length == 1) ? '0' + mes : mes
        let anoF = data.getFullYear();
        let hora = data.getHours();
        let minuto = data.getMinutes();       
	return diaF + "/" + mesF + "/" + anoF + " às " + hora + ":" + minuto;
}

const ComentarioSchema = new Schema({
    nome: {
        type: String
    },
    msg: {
        type: String
    },       
    
    data: {
        type: String,
        default: dataAtualFormatada()

    }     
})

const ComentarioModel = model("comentarios",ComentarioSchema)

module.exports = ComentarioModel
const mongoose = require('mongoose')
require('dotenv').config()

async function ConectaBancoDeDados(){
try {
    console.log('conexão com o banco de dados iniciou')

await mongoose.connect(process.env.MONGO_URL)

console.log('conexão com o banco de dados feita com sucesso!')
} catch(erro){
    console.log(erro)
}
}

module.exports = ConectaBancoDeDados
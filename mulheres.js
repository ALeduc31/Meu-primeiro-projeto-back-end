const express = require ("express"); //aqui estou iniciando o express
const router = express.Router(); // aqui estou configurando a primeira parte da rota
const cors = require('cors') // aqui estou trazendo o pacote cors que permite consumir essa api no front end
const ConectaBandoDeDados = require('./BancoDeDados')//aqui estou ligando ao arquivo BancoDeDados
ConectaBandoDeDados()//aqui estou chamando a função que conecta o

const Mulher = require("./MulherModel");
const MulherModel = require("./MulherModel");

const app = express(); //aqui estou iniciando o app
app.use(express.json());
app.use(cors())

const porta = 3333 // aqui estou criando a porta

//GET
async function mostraMulheres(request, response) { 
try{
const mulheresVindaDoBancoDeDados = await Mulher.find()

response.json (mulheresVindaDoBancoDeDados)
}catch (erro){
console.log(erro)
}
}

//POST
async function criaMulher(request, response) {
  const novaMulher = new Mulher ({
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao

  });
try {
  const mulherCriada = await novaMulher.save()
  response.status(201).json(mulherCriada)
}catch(erro){
    console.log(erro)
  }
}

//PATCH

async function corrigeMulher(request, response) {
  try {
    const mulherEncontrada = await Mulher.findById(request.params.id);

    if (request.body.nome) {
      mulherEncontrada.nome = request.body.nome;
    }

    if (request.body.minibio) {
      mulherEncontrada.minibio = request.body.minibio;
    }

    if (request.body.imagem) {
      mulherEncontrada.imagem = request.body.imagem;
    }

    if (request.body.citacao) { 
      mulherEncontrada.citacao = request.body.citacao;
    }

    const mulherAtualizada = await mulherEncontrada.save();
    response.json(mulherAtualizada);
  } catch (erro) {
    console.log(erro);
  }
}

 //DELETE

  async function deletaMulher(request, response) {
  
      try {
  
          await Mulher.findByIdAndDelete(request.params.id)
  
          response.json({ messagem: 'Mulher deletada com sucesso!'})
  
      } catch(erro) {
  
          console.log(erro)
  
      }
  
  }
  
//PORTA
function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", porta)

}


router.get('/mulheres', mostraMulheres);
router.post('/mulheres', criaMulher);
router.patch('/mulheres/:id', corrigeMulher);
router.delete('/mulheres/:id', deletaMulher);

app.use(router);

app.listen(porta, mostraPorta) // servidor ouvindo a porta
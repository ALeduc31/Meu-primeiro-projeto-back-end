const express = require("express")

const router = express.Router()



const app = express()

const porta = 3333



function mostraMulher(request, response) {

 response.json({

    nome: 'Amanda Leduc',

    imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQGtgUn1oQl6jQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731525371584?e=1747267200&v=beta&t=0pr3sgg7_c7kG3UxeAYw6Up_XyqPbiNMGaCmaRSBGnI',

    minibio: 'Executiva Comercial | Especialista em Vendas B2B/B2C'

 })

}



function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", porta)

}



app.use(router.get('/mulher', mostraMulher))

app.listen(porta, mostraPorta)


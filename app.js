//meus modulos
const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')

//conexao com minha base de dados
//nome gameloja
mongoose.connect('mongodb://localhost:27017/gamelojawalney',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//middleware
server.use(bodyParser.urlencoded({extended:true}))
//json
server.use(bodyParser.json())
//cors
server.use(cors())
//criação da minha entidade
//produto
const Produto = restful.model('Produto', {
    //declaração das minhas variaveis
    //nome 
    //preco
    name: { type: String, required: true },
    preco:  { type: Number, required: false },
    descricao: { type: String, required: true },
    url: { type: String, required: true }


})
// Rest API
//dois endpoint
//get e post
Produto.methods(['get', 'post'])
// Routes
//produtos
Produto.register(server, '/produtos')

// Start Server
//minha porta que rodara
//node.js(backend)
server.listen(3001)
//saida no terminal
//
console.log("conectado")
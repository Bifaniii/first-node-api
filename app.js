const express = require('express')
const app = express()
const Produtos = require('./models/Produtos')

const PORT = 3000

app.post('/cadastro', async(req, res) => {
  try {
    const produto = await Produtos.create({
      nome: req.body.nome,
      preco: req.body.preco,
      descricao: req.body.descricao
    })
      res.send(`Produto ${req.body.nome} cadastro com sucesso!`)
    } catch (err) {
      console.error("Erro ao cadastrar produto!" + err)
      res.status(500).send("Erro ao cadastrar produto")
    }
  })
 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}! 🚀`)
})
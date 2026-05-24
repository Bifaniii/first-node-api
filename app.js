const express = require('express')
const produtoRoutes = require('./src/Routes/produtos')
const app = express()
const Produtos = require('./src/models/Produtos')

const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use("/produtos", produtoRoutes)

 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}! 🚀`)
})
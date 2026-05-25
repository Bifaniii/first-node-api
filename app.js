const express = require('express')
const Produtos = require('./src/models/Produtos')
const produtoRoutes = require('./src/Routes/produtos')
const { swaggerUi, specs } = require('./swagger')
const app = express()


const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
app.use("/produtos", produtoRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}! 🚀`)
})
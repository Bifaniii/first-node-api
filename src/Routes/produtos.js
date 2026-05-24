const express = require('express')
const router = express.Router()
const Produtos = require('../models/Produtos')

// GET Listar Todos produtos
router.get("/", async (req, res) => {
  try {
    const produtos = await Produtos.findAll()
    res.json(produtos)
  } catch (err) {
    console.error("Erro ao buscar lista de produtos - " + err)
    res.status(500).json({erro: "Erro ao buscar lista de produtos!"})
  }
})

// GET Buscar Produto por ID
router.get('/:id', async (req, res) => {
  try {
    const produto = await Produtos.findByPk(req.params.id)

    if (!produto) {
      return res.status(404).json({erro: "Produto não encontrado!"})
    }
    res.json(produto)
  } catch (err) {
    console.error("Erro ao buscar produto - " + err)
    res.status(500).send("Erro ao buscar produto!")
  }
})

// POST Criar Produto
router.post("/", async (req, res) => {
  try {
    const produto = await Produtos.create(req.body)
    res.status(201).json(produto)
  } catch (err) {
    console.error("Erro ao criar produto! - " + err)
    res.status(500).json({erro: "Erro ao cadastrar produto!"})
  }
})

// PUT Atualizar Produto pelo ID
router.put("/:id", async (req, res) => {
  try {
    const produto = await Produtos.findByPk(req.params.id)

    if (!produto) {
      return res.status(404).json({erro: "Produto não encontrado!"})
    }

    await produto.update(req.body)
    res.json(produto)
  } catch (err) {
    console.error("Erro ao atualizar produto! - " + err)
    res.status(500).json({erro: "Erro ao atualizar produto!"})
  }
})

// DELETE Deletar Produto por ID
router.delete("/:id", async (req, res) => {
  try {
    const produto = await Produtos.findByPk(req.params.id)
    
    if (!produto) {
      return res.status(404).json({erro: `Produto com o id ${req.params.id} não encontrado!`})
    }

    await produto.destroy()
    res.status(200).json({mensagem: `Produto ${produto.nome} deletado com sucesso!`})
  } catch (err) {
    console.error("Erro ao deletar produto! - " + err)
    res.status(500).json({erro: "Erro ao deletar produto"})
  }
})

module.exports = router
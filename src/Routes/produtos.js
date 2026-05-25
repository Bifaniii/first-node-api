const express = require('express')
const router = express.Router()
const Produtos = require('../models/Produtos')

/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Endpoints para gerenciamento de produtos
 */

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos
 */

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     summary: Busca um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Produto encontrado
 *       404:
 *         description: Produto não encontrado
 */

/**
 * @swagger
 * /produtos:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *               descricao:
 *                 type: string
 *             example:
 *               nome: "Notebook"
 *               preco: 3500.00
 *               descricao: "Notebook Dell Inspiron"
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *       500:
 *         description: Erro ao cadastrar produto
 */

/**
 * @swagger
 * /produtos/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *               descricao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *       404:
 *         description: Produto não encontrado
 */

/**
 * @swagger
 * /produtos/{id}:
 *   delete:
 *     summary: Deleta um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 *       404:
 *         description: Produto não encontrado
 */


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
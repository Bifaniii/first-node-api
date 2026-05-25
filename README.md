# First Node API 🚀

Um CRUD básico de produtos desenvolvido com **Node.js**, **Express**, **MySQL**, **Sequelize** e **Dotenv**, agora com **Swagger UI** para documentação interativa dos endpoints.  
Este projeto foi criado para fins de aprendizado e prática de construção de APIs RESTful em Node.

---

## 📦 Tecnologias utilizadas

- [Express](https://expressjs.com/) — Framework para criação de rotas e servidor HTTP.
- [Sequelize](https://sequelize.org/) — ORM para manipulação do banco de dados.
- [MySQL2](https://www.npmjs.com/package/mysql2) — Driver para conexão com MySQL.
- [Dotenv](https://www.npmjs.com/package/dotenv) — Gerenciamento de variáveis de ambiente.
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) — Interface web para documentação da API.
- [Swagger JSDoc](https://www.npmjs.com/package/swagger-jsdoc) — Geração automática da documentação a partir de comentários JSDoc.

---

## ⚙️ Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=localhost
DB_DIALECT=mysql
```

---

## ▶️ Como rodar o projeto

1. Clone o repositório:

```
git clone https://github.com/Bifaniii/first-node-api.git
```

2. Instale as dependências:

```
npm install
```

3. Configure o banco de dados MySQL com o nome definido em `DB_NAME`.

4. Inicie o servidor:

```
npm run dev
```

A documentação Swagger estará disponível em:
👉 http://localhost:3000/api-docs

---

## 📚Endpoints da API

Produtos:

- GET `/produtos` → Lista todos os produtos
- GET `/produtos/:id` → Busca um produto pelo ID
- POST `/produtos` → Cria um novo produto  
  Body exemplo:

```
{
  "nome": "Notebook",
  "preco": 1999.99,
  "descricao": "Dell Inspiron"
}
```

- PUT `/produtos/:id` → Atualiza um produto existente
- DELETE `/produtos/:id` → Remove um produto pelo ID

---

## 📂 Estrutura do projeto

first-node-api/  
│── app.js  
│── swagger.js  
│── package.json  
│── .env  
│── src/  
│ ├── models/  
│ │ ├── db.js  
│ │ └── Produtos.js  
│ └── Routes/  
│ └── produtos.js

> Instagram: [@Bifaniii](https://www.instagram.com/bifaniii)  
> LinkedIn: [Guilherme Bifani](https://www.linkedin.com/in/guilhermebifani/)  
> Tentando sair um pouco de java spring para não ficar preso em somente uma stack...

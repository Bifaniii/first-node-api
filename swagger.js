const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "First Node API",
      version: "1.0.0",
      description: "CRUD básico de produtos com Node.js, MySQL, Express, Sequelize e Dotenv",
    },
  },
  apis: ["./src/Routes/*.js"], // Caminho para suas rotas
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };

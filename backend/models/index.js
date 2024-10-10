require("dotenv").config(); // Load .env file
const { Sequelize } = require("sequelize");

// Initialize Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // Include the port
    dialect: process.env.DB_DIALECT,
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

module.exports = sequelize;

const { DataTypes } = require("sequelize");
const sequelize = require("../index"); // Sequelize instance
const Project = require("./Project");

// Define the Category model
const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Category;

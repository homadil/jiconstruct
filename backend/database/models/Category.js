const { DataTypes } = require("sequelize");
const sequelize = require("../index"); // Sequelize instance

// Define the Category model
const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("project", "blog", "both"),
      allowNull: false,
      defaultValue: "project",
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Parent can be either a project or a blog
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Category;

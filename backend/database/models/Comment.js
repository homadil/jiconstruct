const { DataTypes } = require("sequelize");
const sequelize = require("../index"); // Sequelize instance

// Define the Comment model
const Comment = sequelize.define(
  "Comment",
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Can refer to either a blog or a project
    },
    type: {
      type: DataTypes.ENUM("blog", "project"),
      allowNull: false,
      defaultValue: "project",
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Comment;

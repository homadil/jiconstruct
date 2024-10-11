const { DataTypes } = require("sequelize");
const sequelize = require("../index"); // Sequelize instance

// Define the Tag model
const Tag = sequelize.define(
  "Tag",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("blog", "project", "both"),
      defaultValue: "project",
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Can refer to either a blog or a project
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Tag;

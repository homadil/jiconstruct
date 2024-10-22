const { DataTypes } = require("sequelize");
const sequelize = require("../index"); // Sequelize instance
const Media = require("./Media");
// Define the Project model
const Project = sequelize.define(
  "Project",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    client: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "locations",
        key: "id",
      },
    },
    budget: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    show: {
      type: DataTypes.STRING, // Can store both image or video paths
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
// Project.hasMany(Media, { as: "media" });
module.exports = Project;

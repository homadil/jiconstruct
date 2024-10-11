const { DataTypes } = require("sequelize");
const sequelize = require("../index"); // Sequelize instance

// Define the Notification model
const Notification = sequelize.define(
  "Notification",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false,
      defaultValue: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Notification;

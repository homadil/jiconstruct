const { DataTypes } = require("sequelize");
const sequelize = require("../index"); // Sequelize instance

// Define the User model
const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Ensures it's a valid email
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_image: {
      type: DataTypes.STRING,
      allowNull: true, // Optional field for the user's profile image
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      defaultValue: "user",
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true, // Optional field for token
    },
    remember_token: {
      type: DataTypes.TEXT,
      allowNull: true, // Optional field for remember token
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "locations",
        key: "id",
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = User;

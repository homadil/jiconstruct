const sequelize = require("./index"); // Your sequelize instance
const Location = require("./models/Location");
const User = require("./models/User");
const Blog = require("./models/Blog");
const Project = require("./models/Project");
const Category = require("./models/Category");
const Comment = require("./models/Comment");
const Tag = require("./models/Tag");
const Partner = require("./models/Partner");
const Team = require("./models/Team");
const Url = require("./models/Url");
const Media = require("./models/Media");
const Notification = require("./models/Notification");

// Define associations here
User.hasMany(Blog, { foreignKey: "authorId" }); // Example: Blog belongs to User
Blog.belongsTo(User, { foreignKey: "authorId" });

Project.belongsTo(Location, { foreignKey: "locationId" });
Location.hasMany(Project, { foreignKey: "locationId" });

Comment.belongsTo(User, { foreignKey: "userId" });
Comment.belongsTo(Blog, { foreignKey: "parentId", constraints: false });
Comment.belongsTo(Project, { foreignKey: "parentId", constraints: false });

Tag.belongsToMany(Blog, { through: "BlogTags", foreignKey: "tagId" });
Blog.belongsToMany(Tag, { through: "BlogTags", foreignKey: "blogId" });

Tag.belongsToMany(Project, { through: "ProjectTags", foreignKey: "tagId" });
Project.belongsToMany(Tag, { through: "ProjectTags", foreignKey: "projectId" });

// Add additional associations as needed...

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate tables
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
};

// Export the function
module.exports = syncDatabase;

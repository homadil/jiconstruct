const sequelize = require("./index"); // Your sequelize instance
const Location = require("./models/Location");
const User = require("./models/User");
const Blog = require("./models/Blog");
const Project = require("./models/Project");
const Category = require("./models/Category");
const Comment = require("./models/Comment");
const Tag = require("./models/Tag");
const Media = require("./models/Media");
const Notification = require("./models/Notification");
const Partner = require("./models/Partner");
const Url = require("./models/Url");
const Team = require("./models/Team");
const Testimony = require("./models/Testimony");

// Define associations here
Location.hasMany(User, { foreignKey: "location_id" }); // Location has many Users
User.belongsTo(Location, { foreignKey: "location_id" }); // User belongs to Location

User.hasMany(Blog, { foreignKey: "author_id" }); // Blog belongs to User
Blog.belongsTo(User, { foreignKey: "author_id" });

Project.belongsTo(Location, { foreignKey: "location_id" }); // Project has a location
Location.hasMany(Project, { foreignKey: "location_id" }); // Location can have multiple projects

Comment.belongsTo(User, { foreignKey: "user_id" }); // Comment belongs to User
Comment.belongsTo(Blog, { foreignKey: "parent_id", constraints: false }); // Comment belongs to Blog
Comment.belongsTo(Project, { foreignKey: "parent_id", constraints: false }); // Comment belongs to Project

Tag.belongsToMany(Blog, { through: "BlogTags", foreignKey: "tag_id" }); // Blog <-> Tag relationship
Blog.belongsToMany(Tag, { through: "BlogTags", foreignKey: "blog_id" });

Tag.belongsToMany(Project, { through: "ProjectTags", foreignKey: "tag_id" }); // Project <-> Tag relationship
Project.belongsToMany(Tag, {
  through: "ProjectTags",
  foreignKey: "project_id",
});

// Blog associations
Blog.belongsToMany(Category, { through: "BlogCategories" });
Blog.hasMany(Media, { foreignKey: "parent_id" }); // Media belongs to Blog
Blog.hasMany(Comment, { foreignKey: "parent_id" }); // Comment belongs to Blog

// Category associations
Category.belongsToMany(Blog, { through: "BlogCategories" });
Category.belongsToMany(Project, { through: "ProjectCategories" }); // Category <-> Project relationship

// Comment associations
Comment.belongsTo(Blog, {
  foreignKey: "parent_id",
  constraints: false,
  scope: { type: "blog" },
});
Comment.belongsTo(Project, {
  foreignKey: "parent_id",
  constraints: false,
  scope: { type: "project" },
});

// Media associations
Media.belongsTo(Blog, {
  foreignKey: "parent_id",
  constraints: false,
  scope: { type: "blog" },
});
Media.belongsTo(Project, {
  foreignKey: "parent_id",
  constraints: false,
  scope: { type: "project" },
});

// Blog <-> Url relationship
Blog.belongsToMany(Url, { through: "BlogUrl", foreignKey: "blog_id" });
Url.belongsToMany(Blog, { through: "BlogUrl", foreignKey: "url_id" });

// Project <-> Url relationship
Project.belongsToMany(Url, { through: "ProjectUrl", foreignKey: "project_id" });
Url.belongsToMany(Project, { through: "ProjectUrl", foreignKey: "url_id" });

// Project <-> Media relationship
Project.belongsToMany(Media, {
  through: "ProjectMedia",
  foreignKey: "project_id",
});
Media.belongsToMany(Project, {
  through: "ProjectMedia",
  foreignKey: "media_id",
});

// Blog <-> Media relationship
Blog.belongsToMany(Media, { through: "BlogMedia", foreignKey: "blog_id" });
Media.belongsToMany(Blog, { through: "BlogMedia", foreignKey: "media_id" });

// Sync database
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

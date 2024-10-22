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

// Location <-> User (One-to-Many)
Location.hasMany(User, { foreignKey: "location_id", as: "user" });
User.belongsTo(Location, { foreignKey: "location_id", as: "location" });

// User <-> Blog (One-to-Many)
User.hasMany(Blog, { foreignKey: "user_id", as: "blog" });
Blog.belongsTo(User, { foreignKey: "user_id", as: "user" });

// Define associations with alias
Location.hasMany(Project, { foreignKey: "location_id", as: "projects" });
Project.belongsTo(Location, { foreignKey: "location_id", as: "location" });

// User <-> Comment relationship
User.hasMany(Comment, { foreignKey: "user_id", as: "comment" });
Comment.belongsTo(User, { foreignKey: "user_id", as: "user" });

// Blog <-> Comment (Many-to-Many through BlogComment)
Comment.belongsToMany(Blog, {
  through: "BlogComment",
  foreignKey: "comment_id",
});
Blog.belongsToMany(Comment, { through: "BlogComment", foreignKey: "blog_id" });

// Project <-> Media (Many-to-Many through ProjectMedia)
Media.belongsToMany(Project, {
  through: "ProjectMedia",
  foreignKey: "media_id",
});
Project.belongsToMany(Media, {
  through: "ProjectMedia",
  foreignKey: "project_id",
});

// Blog <-> Media (Many-to-Many through BlogMedia)
Media.belongsToMany(Blog, { through: "BlogMedia", foreignKey: "media_id" });
Blog.belongsToMany(Media, { through: "BlogMedia", foreignKey: "blog_id" });

// Category <-> Blog and Project (Many-to-Many)
Category.belongsToMany(Blog, {
  through: "BlogCategories",
  foreignKey: "category_id",
});
Blog.belongsToMany(Category, {
  through: "BlogCategories",
  foreignKey: "blog_id",
});

Category.belongsToMany(Project, {
  through: "ProjectCategories",
  foreignKey: "category_id",
});
Project.belongsToMany(Category, {
  through: "ProjectCategories",
  foreignKey: "project_id",
});

// Tag <-> Blog and Project (Many-to-Many)
Tag.belongsToMany(Blog, { through: "BlogTag", foreignKey: "tag_id" });
Blog.belongsToMany(Tag, { through: "BlogTag", foreignKey: "blog_id" });

Tag.belongsToMany(Project, { through: "ProjectTag", foreignKey: "tag_id" });
Project.belongsToMany(Tag, { through: "ProjectTag", foreignKey: "project_id" });

// Blog <-> Url (Many-to-Many through BlogUrl)
Blog.belongsToMany(Url, { through: "BlogUrl", foreignKey: "blog_id" });
Url.belongsToMany(Blog, { through: "BlogUrl", foreignKey: "url_id" });

// Project <-> Url (Many-to-Many through ProjectUrl)
Project.belongsToMany(Url, { through: "ProjectUrl", foreignKey: "project_id" });
Url.belongsToMany(Project, { through: "ProjectUrl", foreignKey: "url_id" });

//
Media.belongsTo(Project, { foreignKey: "parent_id", as: "project" });
Media.belongsTo(Blog, { foreignKey: "parent_id", as: "blog" });

// Sync database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: false }); // Use { force: true } to drop and recreate tables
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
};

// Export the function
module.exports = syncDatabase;

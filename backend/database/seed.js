const sequelize = require("./index"); // Sequelize instance
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

// Seed data
const seedData = async () => {
  try {
    // Sync all models
    // await sequelize.sync({ force: true });

    // Seed Locations
    const location1 = await Location.create({
      country: "USA",
      state: "California",
      city: "Los Angeles",
      address: "123 Main St",
      type: "project",
    });

    const location2 = await Location.create({
      country: "USA",
      state: "Texas",
      city: "Houston",
      address: "456 Elm St",
      type: "user",
    });

    // Seed Categories
    const category1 = await Category.create({ name: "Construction" });
    const category2 = await Category.create({ name: "Real Estate" });

    // Seed Tags
    const tag1 = await Tag.create({ name: "Trends" });
    const tag2 = await Tag.create({ name: "Architecture" });

    // Seed Users
    const user1 = await User.create({
      name: "John Doe",
      email: "john11@example.com",
      password: "password123",
      location_id: location2.id,
    });

    const user2 = await User.create({
      name: "John Doe",
      email: "john21@example.com",
      password: "password123",
      location_id: location1.id,
    });

    // Seed Blogs
    const blog1 = await Blog.create({
      title: "Construction Trends 2024",
      description: "A look at the latest trends in construction for 2024.",
      content: "The construction industry is evolving rapidly...",
      author_id: user1.id,
      category_id: 1,
      tag_id: 1,
      show: "about1.jpg",
    });

    const blog2 = await Blog.create({
      title: "Construction Trends 2024",
      description: "A look at the latest trends in construction for 2024.",
      content: "The construction industry is evolving rapidly...",
      author_id: user2.id,
      category_id: 2,
      tag_id: 2,
      show: "about1.jpg",
    });

    // Seed Projects
    const project1 = await Project.create({
      title: "Skyscraper Project",
      description: "A new skyscraper in downtown Los Angeles.",
      content: "This project will be one of the tallest buildings...",
      location_id: location1.id,
      director: "Jane Smith",
      budget: 5000000,
      start_date: new Date(),
      end_date: new Date(),
      category_id: 2,
      tag_id: 2,
    });

    const project2 = await Project.create({
      title: "Skyscraper Project",
      description: "A new skyscraper in downtown Los Angeles.",
      content: "This project will be one of the tallest buildings...",
      location_id: location2.id,
      director: "Jane Smith",
      budget: 5000000,
      start_date: new Date(),
      end_date: new Date(),
      category_id: 1,
      tag_id: 1,
    });

    // Seed Comments
    const comment1 = await Comment.create({
      content: "Great post on construction trends!",
      user_id: user2.id,
      parent_id: blog2.id,
    });

    const comment2 = await Comment.create({
      content: "Looking forward to the skyscraper project.",
      user_id: user1.id,
      parent_id: project1.id,
    });

    // Seed Media
    const media1 = await Media.create({
      parent_id: blog1.id,
      type: "blog",
      path: "images/about1.jpg",
      exe: "image",
    });

    const media2 = await Media.create({
      parent_id: project1.id,
      type: "project",
      path: "videos/project.mp4",
      exe: "video",
    });

    // Seed Notifications
    const notification1 = await Notification.create({
      message: "Your project has been updated.",
      name: user1.id,
      email: "email@gmail.com",
      type: "user",
    });

    const notification2 = await Notification.create({
      message: "Your project has been updated.",
      name: user1.id,
      email: "email@gmail.com",
      type: "admin",
    });

    // Seed Partners
    const partner1 = await Partner.create({
      name: "ABC Construction",
      image: "https://abcconstruction.com",
      slogan: "https://company.com/blog",
    });

    const partner2 = await Partner.create({
      name: "ABC Construction",
      image: "https://abcconstruction.com",
      slogan: "https://company.com/blog",
    });

    // Seed URLs
    const url1 = await Url.create({
      name: "Company Blog",
      link: "https://company.com/blog",
    });

    // Seed URLs
    const url2 = await Url.create({
      name: "Company Blog",
      link: "https://company.com/blog",
    });

    // Seed Teams
    const team1 = await Team.create({
      name: "John Team",
      position: "Manager",
      image: "images/team1.jpg",
    });

    const team2 = await Team.create({
      name: "John Team",
      position: "Manager",
      image: "images/team1.jpg",
    });

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

// Run the seed function
seedData();

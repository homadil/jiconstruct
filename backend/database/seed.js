const sequelize = require("./index"); // Your Sequelize instance
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

const dummyData = async () => {
  // Create Locations
  const locations = await Location.bulkCreate([
    {
      country: "USA",
      state: "California",
      city: "Los Angeles",
      address: "123 Main St",
      type: "user",
    },
    {
      country: "USA",
      state: "New York",
      city: "New York City",
      address: "456 Broadway",
      type: "project",
    },
    {
      country: "Canada",
      state: "Ontario",
      city: "Toronto",
      address: "789 Queen St",
      type: "user",
    },
    {
      country: "USA",
      state: "Texas",
      city: "Houston",
      address: "321 Elm St",
      type: "project",
    },
  ]);

  // Create Users
  const users = await User.bulkCreate([
    {
      name: "John Doe",
      email: "john21@example.com",
      password: "password123",
      profile_image: "assets/images/team1.jpg",
      role: "admin",
      token: "token123",
      remember_token: "remember123",
      location_id: null,
      googleId: null,
      facebookId: null,
    },
    {
      name: "Jane Smith",
      email: "jane21@example.com",
      password: "password123",
      profile_image: "assets/images/team2.jpg",
      role: "user",
      googleId: null,
      facebookId: null,
    },
    {
      name: "Alice Johnson",
      email: "alic21e@example.com",
      password: "password123",
      profile_image: "assets/images/team3.jpg",
      role: "user",
      googleId: null,
      facebookId: null,
    },
    {
      name: "Bob Brown",
      email: "bob21@example.com",
      password: "password123",
      profile_image: "assets/images/team4.jpg",
      role: "admin",
      googleId: null,
      facebookId: null,
    },
    {
      name: "Charlie White",
      email: "charlie21@example.com",
      password: "password123",
      profile_image: "assets/images/team5.jpg",
      role: "user",
      googleId: null,
      facebookId: null,
    },
  ]);

  // Update users with a location
  await users[3].update({ location_id: locations[0].id }); // John Doe
  await users[4].update({ location_id: locations[1].id }); // Jane Smith

  // Create Blogs
  const blogs = await Blog.bulkCreate([
    {
      title: "Blog Title 1",
      desc: "Description of Blog 1",
      date: new Date(),
      comment_count: 2,
      author_id: users[0].id,
      content: "<p>This is the content of Blog 1.</p>",
      show: "assets/images/download_1.jpg",
    },
    {
      title: "Blog Title 2",
      desc: "Description of Blog 2",
      date: new Date(),
      comment_count: 1,
      author_id: users[1].id,
      content: "<p>This is the content of Blog 2.</p>",
      show: "assets/images/download_2.jpg",
    },
    {
      title: "Blog Title 3",
      desc: "Description of Blog 3",
      date: new Date(),
      comment_count: 0,
      author_id: users[2].id,
      content: "<p>This is the content of Blog 3.</p>",
      show: "assets/images/download_3.jpg",
    },
    {
      title: "Blog Title 4",
      desc: "Description of Blog 4",
      date: new Date(),
      comment_count: 3,
      author_id: users[3].id,
      content: "<p>This is the content of Blog 4.</p>",
      show: "assets/images/download_4.jpg",
    },
    {
      title: "Blog Title 5",
      desc: "Description of Blog 5",
      date: new Date(),
      comment_count: 5,
      author_id: users[4].id,
      content: "<p>This is the content of Blog 5.</p>",
      show: "assets/images/download_5.jpg",
    },
  ]);

  // Create Projects
  const projects = await Project.bulkCreate([
    {
      title: "Project Title 1",
      description: "Description of Project 1",
      content: "<p>This is the content of Project 1.</p>",
      location_id: locations[1].id,
      director: users[0].id,
    },
    {
      title: "Project Title 2",
      description: "Description of Project 2",
      content: "<p>This is the content of Project 2.</p>",
      location_id: locations[3].id,
      director: users[1].id,
    },
    {
      title: "Project Title 3",
      description: "Description of Project 3",
      content: "<p>This is the content of Project 3.</p>",
      location_id: locations[2].id,
      director: users[2].id,
    },
    {
      title: "Project Title 4",
      description: "Description of Project 4",
      content: "<p>This is the content of Project 4.</p>",
      location_id: locations[0].id,
      director: users[3].id,
    },
  ]);

  // Create Categories
  const categories = await Category.bulkCreate([
    { name: "Construction", type: "blog", parent_id: 1 },
    { name: "Renovation", type: "project", parent_id: 2 },
    { name: "Design", type: "blog", parent_id: 1 },
    { name: "Management", type: "project", parent_id: 2 },
  ]);

  // Create Tags
  const tags = await Tag.bulkCreate([
    { name: "Building", type: "blog", parent_id: 1 },
    { name: "Remodel", type: "project", parent_id: 1 },
    { name: "Architecture", type: "both", parent_id: null },
    { name: "Sustainability", type: "both", parent_id: null },
  ]);

  // Create Comments
  const comments = await Comment.bulkCreate([
    {
      content: "This is a comment on Blog 1.",
      user_id: users[1].id,
      parent_id: blogs[0].id,
      type: "blog",
    },
    {
      content: "This is a comment on Project 1.",
      user_id: users[2].id,
      parent_id: projects[0].id,
      type: "project",
    },
    {
      content: "Great insights!",
      user_id: users[3].id,
      parent_id: blogs[1].id,
      type: "blog",
    },
    {
      content: "Looking forward to this project!",
      user_id: users[4].id,
      parent_id: projects[1].id,
      type: "project",
    },
  ]);

  // Create Partners
  await Partner.bulkCreate([
    {
      name: "Construction Co.",
      image: "assets/images/about1.jpg",
      slogan: "Building the future.",
    },
    {
      name: "Design Partners",
      image: "assets/images/about2.jpg",
      slogan: "Designing with passion.",
    },
    {
      name: "Renovation Experts",
      image: "assets/images/about3.webp",
      slogan: null, // Slogan can be null
    },
  ]);

  // Create Teams
  await Team.bulkCreate([
    {
      name: "Sarah Connor",
      position: "Project Manager",
      image: "assets/images/team1.jpg",
    },
    {
      name: "Kyle Reese",
      position: "Lead Architect",
      image: "assets/images/team2.jpg",
    },
    {
      name: "John Connor",
      position: "Engineer",
      image: "assets/images/team3.jpg",
    },
  ]);

  // Create URLs
  await Url.bulkCreate([
    {
      name: "Home Page",
      link: "http://example.com/home",
      icon: "path/to/icon.jpg",
      image: null,
    },
    {
      name: "Contact Us",
      link: "http://example.com/contact",
      icon: "path/to/icon2.jpg",
      image: "assets/images/download_6.jpg",
    },
  ]);

  // Create Media
  await Media.bulkCreate([
    {
      parent_id: 0,
      type: "blog",
      path: "assets/images/download_7.jpg",
      exe: "image",
    },
    {
      parent_id: 1,
      type: "project",
      path: "assets/videos/details.mp4",
      exe: "video",
    },
    {
      parent_id: null, // Home Header
      type: "home_header",
      path: "assets/images/download_8.jpg",
      exe: "image",
    },

    {
      parent_id: null, // Home Header
      type: "home_header",
      path: "assets/images/download_8.jpg",
      exe: "image",
    },
    {
      parent_id: null, // News Header
      type: "news_header",
      path: "assets/images/download_9.webp",
      exe: "image",
    },
    {
      parent_id: null,
      type: "project_header",
      path: "assets/videos/project.mp4",
      exe: "video",
    },
  ]);

  // Create Notifications
  await Notification.bulkCreate([
    {
      name: "Service Request",
      email: "client1@example.com",
      message: "Requesting a quote for a new project.",
      type: "admin",
    },
    {
      name: "Feedback",
      email: "admin@example.com",
      message: "Loved the service! Will recommend to others.",
      type: "user",
    },
    {
      name: "Inquiry",
      email: "client2@example.com",
      message: "Can you provide details about your services?",
      type: "admin",
    },
  ]);

  console.log("Dummy data created successfully!");
};

// Execute the dummy data creation function
dummyData().catch((error) =>
  console.error("Error creating dummy data:", error)
);

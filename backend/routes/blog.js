const express = require("express");
const router = express.Router();
const Blogs = require("../controllers/BlogController"); // Import the Blog controller

// CREATE - Add a new blog
router.post("/", Blogs.createBlog);

// READ - Get all blogs
router.get("/", Blogs.getAllBlogs);

// READ - Get a single blog by ID
router.get("/:id", Blogs.getBlogById);

// UPDATE (PUT) - Update an entire blog by ID
router.put("/:id", Blogs.updateBlog);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch("/:id", Blogs.partialUpdateBlog);

// DELETE - Remove a blog by ID
router.delete("/:id", Blogs.deleteBlog);

module.exports = router;

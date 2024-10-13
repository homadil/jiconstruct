const express = require("express");
const router = express.Router();
const Project = require("../controllers/ProjectController"); // Import the Blog controller

// CREATE - Add a new blog
router.post("/", Project.createBlog);

// READ - Get all blogs
router.get("/", Project.getAllProject);

// READ - Get a single blog by ID
router.get("/:id", Project.getBlogById);

// UPDATE (PUT) - Update an entire blog by ID
router.put("/:id", Project.updateBlog);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch("/:id", Project.partialUpdateBlog);

// DELETE - Remove a blog by ID
router.delete("/:id", Project.deleteBlog);

module.exports = router;

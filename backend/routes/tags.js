const express = require("express");
const router = express.Router();
const Tags = require("../controllers/TagsController"); // Import the Blog controller

// CREATE - Add a new blog
router.post("/", Tags.createBlog);

// READ - Get all blogs
router.get("/", Tags.getAllTags);

// READ - Get a single blog by ID
router.get("/:id", Tags.getBlogById);

// UPDATE (PUT) - Update an entire blog by ID
router.put("/:id", Tags.updateBlog);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch("/:id", Tags.partialUpdateBlog);

// DELETE - Remove a blog by ID
router.delete("/:id", Tags.deleteBlog);

module.exports = router;

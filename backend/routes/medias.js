const express = require("express");
const router = express.Router();
const Media = require("../controllers/MediaController"); // Import the Blog controller

// CREATE - Add a new blog
router.post("/", Media.createBlog);

// READ - Get all blogs
router.get("/", Media.getAllMedia);

// READ - Get a single blog by ID
router.get("/:id", Media.getBlogById);

// UPDATE (PUT) - Update an entire blog by ID
router.put("/:id", Media.updateBlog);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch("/:id", Media.partialUpdateBlog);

// DELETE - Remove a blog by ID
router.delete("/:id", Media.deleteBlog);

module.exports = router;

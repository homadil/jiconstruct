const express = require("express");
const router = express.Router();
const Comment = require("../controllers/CommentController"); // Import the Blog controller

// CREATE - Add a new blog
router.post("/", Comment.createBlog);

// READ - Get all blogs
router.get("/", Comment.getAllComment);

// READ - Get a single blog by ID
router.get("/:id", Comment.getBlogById);

// UPDATE (PUT) - Update an entire blog by ID
router.put("/:id", Comment.updateBlog);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch("/:id", Comment.partialUpdateBlog);

// DELETE - Remove a blog by ID
router.delete("/:id", Comment.deleteBlog);

module.exports = router;

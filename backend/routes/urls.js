const express = require("express");
const router = express.Router();
const Url = require("../controllers/UrlController"); // Import the Blog controller

// CREATE - Add a new blog
router.post("/", Url.createBlog);

// READ - Get all blogs
router.get("/", Url.getAllUrl);

// READ - Get a single blog by ID
router.get("/:id", Url.getBlogById);

// UPDATE (PUT) - Update an entire blog by ID
router.put("/:id", Url.updateBlog);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch("/:id", Url.partialUpdateBlog);

// DELETE - Remove a blog by ID
router.delete("/:id", Url.deleteBlog);

module.exports = router;

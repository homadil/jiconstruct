const express = require("express");
const router = express.Router();
const Team = require("../controllers/TeamController"); // Import the Blog controller

// CREATE - Add a new blog
router.post("/", Team.createBlog);

// READ - Get all blogs
router.get("/", Team.getAllTeam);

// READ - Get a single blog by ID
router.get("/:id", Team.getBlogById);

// UPDATE (PUT) - Update an entire blog by ID
router.put("/:id", Team.updateBlog);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch("/:id", Team.partialUpdateBlog);

// DELETE - Remove a blog by ID
router.delete("/:id", Team.deleteBlog);

module.exports = router;

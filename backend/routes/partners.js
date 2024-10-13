const express = require("express");
const router = express.Router();
const Partner = require("../controllers/PartnerController"); // Import the Blog controller

// CREATE - Add a new blog
router.post("/", Partner.createBlog);

// READ - Get all blogs
router.get("/", Partner.getAllPartner);

// READ - Get a single blog by ID
router.get("/:id", Partner.getBlogById);

// UPDATE (PUT) - Update an entire blog by ID
router.put("/:id", Partner.updateBlog);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch("/:id", Partner.partialUpdateBlog);

// DELETE - Remove a blog by ID
router.delete("/:id", Partner.deleteBlog);

module.exports = router;

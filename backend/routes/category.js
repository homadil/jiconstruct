const express = require("express");
const router = express.Router();
const Categories = require("../controllers/CategoryController"); // Import the Blog controller

// CREATE - Add a new blog
router.post("/", Categories.createCategories);

// READ - Get all blogs
router.get("/", Categories.getAllCategories);

// READ - Get a single blog by ID
router.get("/:id", Categories.getByCategoriesId);

// UPDATE (PUT) - Update an entire blog by ID
router.put("/:id", Categories.updateCategories);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch("/:id", Categories.partialUpdateCategories);

// DELETE - Remove a blog by ID
router.delete("/:id", Categories.deleteCategories);

module.exports = router;

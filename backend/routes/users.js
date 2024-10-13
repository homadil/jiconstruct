const express = require("express");
const router = express.Router();
const Controller = require("../controllers/UserController");
const isAdmin = require("../middleware/auth/isAdmin");

// Get all users
router.get("/", isAdmin, Controller.get);

// Create a new user
router.post("/", Controller.store);

// Get a user by ID
router.get("/:id", Controller.show);

// UPDATE (PUT) - Update an entire user by ID
router.put("/:id", Controller.updateBlog);

// PARTIAL UPDATE (PATCH) - Partially update a user by ID
router.patch("/:id", Controller.partialUpdateBlog);

// DELETE - Remove a user by ID
router.delete("/:id", Controller.deleteBlog);

module.exports = router;

const express = require("express");
const router = express.Router();
const Notification = require("../controllers/NotificationController"); // Import the Blog controller

// CREATE - Add a new blog
router.post("/", Notification.createBlog);

// READ - Get all blogs
router.get("/", Notification.getAllNotification);

// READ - Get a single blog by ID
router.get("/:id", Notification.getBlogById);

// UPDATE (PUT) - Update an entire blog by ID
router.put("/:id", Notification.updateBlog);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch("/:id", Notification.partialUpdateBlog);

// DELETE - Remove a blog by ID
router.delete("/:id", Notification.deleteBlog);

module.exports = router;

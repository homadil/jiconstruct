const express = require("express");
const router = express.Router();
const Blogs = require("../controllers/BlogController"); // Import the Blog controller
const { returnValidation } = require("../middleware/validations");
const isAuth = require("../middleware/auth/isAuth");
const { blogValidationRules } = require("../middleware/validations/blog");

// CREATE - Add a new blog
router.post(
  "/",
  isAuth,
  blogValidationRules,
  returnValidation,
  Blogs.createBlog
);

// READ - Get all blogs
router.get("/", Blogs.getAllBlogs);

// READ - Get a single blog by ID
router.get("/:id", Blogs.getBlogById);

// UPDATE (PUT) - Update an entire blog by ID
router.put(
  "/:id",
  isAuth,
  blogValidationRules,
  returnValidation,
  Blogs.updateBlog
);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch(
  "/:id",
  isAuth,
  blogValidationRules,
  returnValidation,
  Blogs.partialUpdateBlog
);

// DELETE - Remove a blog by ID
router.delete(
  "/:id",
  isAuth,
  blogValidationRules,
  returnValidation,
  Blogs.deleteBlog
);

module.exports = router;

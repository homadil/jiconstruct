const express = require("express");
const router = express.Router();
const Blogs = require("../controllers/BlogController"); // Import the Blog controller
const { returnValidation } = require("../middleware/validations");
const isAuth = require("../middleware/auth/isAuth");
const isAdmin = require("../middleware/auth/isAdmin");
const { blogValidationRules } = require("../middleware/validations/blog");
const upload = require("../config/upload");

// CREATE - Add a new blog
router.post(
  "/",
  isAdmin,
  blogValidationRules,
  returnValidation,
  upload.array("media", 10),
  Blogs.create
);

// READ - Get all blogs
router.get("/", Blogs.getAll);

// READ - Get a single blog by ID
router.get("/:id", Blogs.getById);

// UPDATE (PUT) - Update an entire blog by ID
router.put(
  "/:id",
  isAdmin,
  blogValidationRules,
  returnValidation,
  Blogs.update
);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch(
  "/:id",
  isAdmin,
  blogValidationRules,
  returnValidation,
  Blogs.partialUpdate
);

// DELETE - Remove a blog by ID
router.delete(
  "/:id",
  isAdmin,
  blogValidationRules,
  returnValidation,
  Blogs.delete
);

module.exports = router;

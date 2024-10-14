const express = require("express");
const router = express.Router();
const Media = require("../controllers/MediaController"); // Import the Blog controller
const { returnValidation } = require("../middleware/validations");
const isAuth = require("../middleware/auth/isAuth");
const isAdmin = require("../middleware/auth/isAdmin");
const { mediaValidationRules } = require("../middleware/validations/media");

// CREATE - Add a new blog
router.post("/", isAdmin, mediaValidationRules, returnValidation, Media.create);

// READ - Get all blogs
router.get("/", Media.getAll);

// READ - Get a single blog by ID
router.get("/:id", Media.getById);

// UPDATE (PUT) - Update an entire blog by ID
router.put(
  "/:id",
  isAdmin,
  mediaValidationRules,
  returnValidation,
  Media.update
);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch(
  "/:id",
  isAdmin,
  mediaValidationRules,
  returnValidation,
  Media.partialUpdate
);

// DELETE - Remove a blog by ID
router.delete("/:id", Media.delete);

module.exports = router;

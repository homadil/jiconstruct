const express = require("express");
const router = express.Router();
const Url = require("../controllers/UrlController"); // Import the Blog controller
const isAdmin = require("../middleware/auth/isAdmin");
const { returnValidation } = require("../middleware/validations");
const urlValidationRules = require("../middleware/validations/url");

// CREATE - Add a new blog
router.post("/", isAdmin, urlValidationRules(), returnValidation, Url.create);

// READ - Get all blogs
router.get("/", Url.getAll);

// READ - Get a single blog by ID
router.get("/:id", Url.getById);

// UPDATE (PUT) - Update an entire blog by ID
router.put("/:id", isAdmin, urlValidationRules(), returnValidation, Url.update);

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
router.patch(
  "/:id",
  isAdmin,
  urlValidationRules(),
  returnValidation,
  Url.partialUpdate
);

// DELETE - Remove a blog by ID
router.delete("/:id", isAdmin, Url.delete);

module.exports = router;

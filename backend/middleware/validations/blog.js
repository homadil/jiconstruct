const { check } = require("express-validator");

// Blog validation rules
exports.blogValidationRules = [
  // Validate and sanitize the title
  check("title")
    .isString()
    .withMessage("Title must be a string")
    .notEmpty()
    .withMessage("Title is required")
    .trim(),

  // Validate and sanitize the content
  check("content")
    .isString()
    .withMessage("Content must be a string")
    .notEmpty()
    .withMessage("Content is required")
    .trim(),

  // Validate categories (optional)
  check("categories")
    .optional()
    .isArray()
    .withMessage("Categories must be an array"),

  // Validate tags (optional)
  check("tags").optional().isArray().withMessage("Tags must be an array"),

  // Validate media (optional)
  check("media").optional().isArray().withMessage("Media must be an array"),

  // Validate ID parameter for update and delete
  check("id")
    .isInt()
    .optional()
    .withMessage("ID must be an integer")
    .notEmpty()
    .withMessage("ID is required"),
];

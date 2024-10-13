const { check } = require("express-validator");

// Blog validation rules
exports.blogValidationRules = [
  // Title is required for both create and update
  check("title")
    .optional({ checkFalsy: true })
    .notEmpty()
    .withMessage("Title is required"),

  // Content is required for both create and update
  check("content")
    .optional({ checkFalsy: true })
    .notEmpty()
    .withMessage("Content is required"),

  // Show must be a valid URL if provided
  check("show")
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage("Show must be a valid URL"),

  // Author ID must be valid; however, it's dynamically set from req.user in the controller
  check("author_id")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Author ID must be a valid user ID"),

  // Validate that quote, if provided, is not empty
  check("quote")
    .optional({ checkFalsy: true })
    .isString()
    .withMessage("Quote must be a valid string if provided"),
];

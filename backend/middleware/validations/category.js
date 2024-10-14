const { check } = require("express-validator");

// category validation rules
exports.CategoryValidationRules = [
  // name is required for both create and update
  check("name").notEmpty().withMessage("name is required"),
];

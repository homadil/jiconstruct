const { body } = require("express-validator");

// Validation rules for Url
const urlValidationRules = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Name is required.")
      .isString()
      .withMessage("Name must be a string."),
    body("link")
      .notEmpty()
      .withMessage("Link is required.")
      .isURL()
      .withMessage("Link must be a valid URL."),
    body("icon").optional().isString().withMessage("Icon must be a string."),
  ];
};

module.exports = urlValidationRules;

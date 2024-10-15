const { body } = require("express-validator");

exports.projectValidationRules = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("Title is required.")
      .isString()
      .withMessage("Title must be a string."),
    body("description")
      .optional()
      .isString()
      .withMessage("Description must be a string."),
    body("content")
      .optional()
      .isString()
      .withMessage("Content must be a string."),
    body("start_date")
      .optional()
      .isISO8601()
      .toDate()
      .withMessage("Start date must be a valid date."),
    body("end_date")
      .optional()
      .isISO8601()
      .toDate()
      .withMessage("End date must be a valid date."),
    body("client")
      .optional()
      .isString()
      .withMessage("Client name must be a string."),
    body("director")
      .optional()
      .isString()
      .withMessage("Director name must be a string."),
    body("location_id")
      .optional()
      .isInt()
      .withMessage("Location ID must be an integer."),
    body("budget")
      .optional()
      .isDecimal()
      .withMessage("Budget must be a decimal value."),
  ];
};

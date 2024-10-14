const { check } = require("express-validator");

exports.mediaValidationRules = [
  check("parent_id")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Parent ID must be a positive integer."),

  check("type")
    .notEmpty()
    .withMessage("Media type is required.")
    .isIn([
      "project",
      "blog",
      "home_header",
      "home_grid",
      "news_header",
      "project_header",
      "about_us_header",
      "about_us_image",
      "contact_us_header",
    ])
    .withMessage("Invalid media type provided."),

  check("exe")
    .notEmpty()
    .withMessage("Media extension (exe) is required.")
    .isIn(["video", "image"])
    .withMessage("Media exe must be either 'video' or 'image'."),
];

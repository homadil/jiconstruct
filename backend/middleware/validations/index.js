const { check, body, validationResult } = require("express-validator");

exports.returnValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

exports.validateEmail = [
  body("email").isEmail().withMessage("Valid email is required"),
];

exports.validatePassword = [
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
  check("confirm_password", "Confirm Password is required").exists(),
  check("confirm_password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Confirm Password does not match Password");
    }
    return true; // Indicates the success of this synchronous custom validator
  }),
];

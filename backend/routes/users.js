const express = require("express");
const router = express.Router();
const Controller = require("../controllers/UserController");
const isAdmin = require("../middleware/auth/isAdmin");
const UserValidationRules = require("../middleware/validations/user");
const {
  validateEmail,
  returnValidation,
} = require("../middleware/validations");
const upload = require("../config/multerConfig");

// Get all users
router.get("/", Controller.get);

router.post(
  "/newsletter",
  validateEmail,
  returnValidation,
  Controller.newsLetter
);

// Get a user by ID
router.get("/:id", Controller.show);

// UPDATE (PUT) - Update an entire user by ID
router.put(
  "/:id",
  upload,
  UserValidationRules,
  returnValidation,
  Controller.update
);

// DELETE - Remove a user by ID
router.delete("/:id", Controller.delete);

module.exports = router;

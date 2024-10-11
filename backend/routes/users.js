const express = require("express");
const router = express.Router();
const Controller = require("../controllers/UserController");

// Get all users
router.get("/", Controller.get);

// Create a new user
router.post("/", Controller.store);

// Get a user by ID
router.get("/:id", Controller.show);

module.exports = router;

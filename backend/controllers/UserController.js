const User = require("../database/models/User"); // Import the User model
const Email = require("../database/models/Email"); // Import the User model
const Location = require("../database/models/Location");

//get all users
exports.get = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//show specific user
exports.show = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.newsLetter = async (req, res) => {
  try {
    const newUser = await Email.create(req.body);
    res.json({ msg: `${newUser.email} has been added successfully` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const { email, name, role } = req.body; // Retrieve fields from request body
  const userId = req.params.id; // Assuming user ID is passed as a URL parameter

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update user fields except email and password
    user.name = name;
    user.role = role;

    // Handle profile_image update
    if (req.files["files"] && req.files["files"].length > 0) {
      user.profile_image = req.files["files"][0].path; // Save the uploaded file path
    }

    // Update or create location
    const { country, state, city, address } = req.body;

    let location = await Location.findOne({ where: { userId } }); // Check if location exists
    if (!location) {
      // Create new location if it doesn't exist
      location = await Location.create({
        country,
        state,
        city,
        address,
        type: "user", // Assuming the type for user
      });
    } else {
      // Update existing location
      location.country = country;
      location.state = state;
      location.city = city;
      location.address = address;
      await location.save();
    }

    user.location_id = location.id; // Associate location with user

    // Save user changes
    await user.save();

    return res.json({ msg: "User updated successfully", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "User update failed" });
  }
};

// User Controller
exports.delete = async (req, res) => {
  const userId = req.params.id; // Retrieve user ID from the request parameters

  try {
    const user = await User.findByPk(userId); // Find the user by ID
    if (!user) {
      return res.status(404).json({ error: "User not found" }); // If user does not exist
    }

    // Optionally, you can also delete related Location data if needed
    await Location.destroy({ where: { id: user.location_id } }); // Delete the related location

    await user.destroy(); // Delete the user
    return res.json({ msg: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to delete user" });
  }
};

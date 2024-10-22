const fs = require("fs");
const path = require("path");
const Teams = require("../database/models/Team");

// CREATE - Add a new Teams (with image upload)
const create = async (req, res) => {
  try {
    // Check if file was uploaded
    if (!req.files["files"] || req.files["files"].length === 0) {
      return res.status(400).json({ msg: "No media files uploaded." });
    }

    // let imagePath = req.files ? `images/${req.files.filename}` : null;

    let imagePath = req.files["files"][0].path.replace(/^public[\\/]/, ""); // Remove 'public/' from the file path

    const teamData = {
      ...req.body,
      image: imagePath, // Store image path in the database
    };

    const team = await Teams.create(teamData);
    res
      .status(201)
      .json({ ...team.dataValues, msg: `${team.name} created successfully` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ - Get all Testimonys
const getAll = async (req, res) => {
  try {
    const teams = await Teams.findAll();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Get a single Teams by ID
const getById = async (req, res) => {
  try {
    const team = await Teams.findByPk(req.params.id);
    if (!team) {
      return res.status(404).json({ message: "Teams not found" });
    }
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE (PUT) - Update an entire Teams by ID with image upload
const update = async (req, res) => {
  try {
    const team = await Teams.findByPk(req.params.id);

    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    let imagePath = team.image; // Keep the current image by default

    if (req.files["files"] && req.files["files"].length > 0) {
      // Get the new image path
      const newImagePath = req.files["files"][0].path.replace(
        /^public[\\/]/,
        ""
      );

      // If the Teams already has an image, delete the old one
      const OldPath = path.join(__dirname, "..", "public", team.image); // Get absolute path

      if (fs.existsSync(OldPath)) {
        fs.unlinkSync(OldPath); // Delete the old image
      }

      imagePath = newImagePath; // Set new image path
    }

    const updatedTeamData = {
      ...req.body,
      image: imagePath, // Update image if a new one was uploaded
      msg: `${team.name} was updated successfully `,
    };

    // Update the team with the new data, and specify the `where` condition
    await Teams.update(updatedTeamData, {
      where: { id: req.params.id }, // Specify which team to update
    });

    res.status(200).json({ ...updatedTeamData, id: team.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PARTIAL UPDATE (PATCH) - Partially update a Teams by ID
const partialUpdate = async (req, res) => {
  try {
    const Teams = await Teams.findByPk(req.params.id);
    if (!Teams) {
      return res.status(404).json({ message: "Teams not found" });
    }
    await Teams.update(req.body);
    res.status(200).json(Teams);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE - Remove a Teams by ID and delete the image from filesystem
const deleteTeam = async (req, res) => {
  try {
    const teams = await Teams.findByPk(req.params.id);
    if (!teams) {
      return res.status(404).json({ message: "Teams not found" });
    }

    // If the Teams has an image, delete it from the filesystem
    if (teams.image) {
      // If the Teams already has an image, delete the old one
      const OldPath = path.join(__dirname, "..", "public", teams.image); // Get absolute path

      if (fs.existsSync(OldPath)) {
        fs.unlinkSync(OldPath); // Delete the old image
      }
    }
    const deletedTeam = teams;

    // Delete the Teams record from the database
    await teams.destroy();
    res
      .status(204)
      .json({ msg: `${deletedTeam.name} was deleted successfully ` });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  partialUpdate,
  delete: deleteTeam,
};

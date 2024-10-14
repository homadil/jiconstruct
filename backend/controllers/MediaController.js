const Media = require("../database/models/Media"); // Import the Media model
const path = require("path");
const fs = require("fs");

// CREATE - Add new media
exports.create = async (req, res) => {
  try {
    const { parent_id, type, exe } = req.body;

    // Assuming file is uploaded via multer and its path is available as req.file
    if (!req.file) {
      return res.status(400).json({ message: "No media file uploaded." });
    }

    const filePath =
      exe === "image"
        ? path.join("public", "images", req.file.filename)
        : path.join("public", "videos", req.file.filename);

    // Create media entry in the database
    const media = await Media.create({
      parent_id,
      type,
      path: filePath,
      exe,
    });

    return res
      .status(201)
      .json({ message: "Media created successfully.", media });
  } catch (error) {
    console.error("Error creating media:", error);
    return res.status(500).json({ message: "Error creating media.", error });
  }
};

// READ - Get all media
exports.getAll = async (req, res) => {
  try {
    const media = await Media.findAll();
    return res.status(200).json({ media });
  } catch (error) {
    console.error("Error fetching media:", error);
    return res.status(500).json({ message: "Error fetching media.", error });
  }
};

// READ - Get a single media by ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const media = await Media.findByPk(id);

    if (!media) {
      return res.status(404).json({ message: "Media not found." });
    }

    return res.status(200).json({ media });
  } catch (error) {
    console.error("Error fetching media:", error);
    return res.status(500).json({ message: "Error fetching media.", error });
  }
};

// UPDATE - Update an entire media entry by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { parent_id, type, exe } = req.body;

    const media = await Media.findByPk(id);
    if (!media) {
      return res.status(404).json({ message: "Media not found." });
    }

    // If new file is uploaded, replace the old file
    if (req.file) {
      const newFilePath =
        exe === "image"
          ? path.join("public", "images", req.file.filename)
          : path.join("public", "videos", req.file.filename);

      // Delete old file
      fs.unlinkSync(media.path);

      media.path = newFilePath;
    }

    // Update media fields
    await media.update({
      parent_id,
      type,
      exe,
      path: media.path,
    });

    return res
      .status(200)
      .json({ message: "Media updated successfully.", media });
  } catch (error) {
    console.error("Error updating media:", error);
    return res.status(500).json({ message: "Error updating media.", error });
  }
};

// PARTIAL UPDATE - Partially update a media entry by ID
exports.partialUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { parent_id, type, exe } = req.body;

    const media = await Media.findByPk(id);
    if (!media) {
      return res.status(404).json({ message: "Media not found." });
    }

    // If a new file is uploaded, replace the old file
    if (req.file) {
      const newFilePath =
        exe === "image"
          ? path.join("public", "images", req.file.filename)
          : path.join("public", "videos", req.file.filename);

      // Delete old file
      fs.unlinkSync(media.path);

      media.path = newFilePath;
    }

    // Update media fields with partial data
    await media.update({
      parent_id: parent_id || media.parent_id,
      type: type || media.type,
      exe: exe || media.exe,
      path: media.path,
    });

    return res
      .status(200)
      .json({ message: "Media partially updated successfully.", media });
  } catch (error) {
    console.error("Error partially updating media:", error);
    return res
      .status(500)
      .json({ message: "Error partially updating media.", error });
  }
};

// DELETE - Remove a media entry by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const media = await Media.findByPk(id);

    if (!media) {
      return res.status(404).json({ message: "Media not found." });
    }

    // Delete the file from the filesystem
    fs.unlinkSync(media.path);

    // Delete the media entry from the database
    await media.destroy();

    return res.status(200).json({ message: "Media deleted successfully." });
  } catch (error) {
    console.error("Error deleting media:", error);
    return res.status(500).json({ message: "Error deleting media.", error });
  }
};

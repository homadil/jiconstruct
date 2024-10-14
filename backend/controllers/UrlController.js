const Url = require("../database/models/Url"); // Adjust the path based on your directory structure

// CREATE - Add a new URL
exports.create = async (req, res) => {
  try {
    const url = await Url.create(req.body);
    return res.status(201).json(url);
  } catch (error) {
    console.error("Error creating URL:", error);
    return res.status(500).json({ error: "Failed to create URL" });
  }
};

// READ - Get all URLs
exports.getAll = async (req, res) => {
  try {
    const urls = await Url.findAll();
    return res.status(200).json(urls);
  } catch (error) {
    console.error("Error fetching URLs:", error);
    return res.status(500).json({ error: "Failed to fetch URLs" });
  }
};

// READ - Get a single URL by ID
exports.getById = async (req, res) => {
  try {
    const url = await Url.findByPk(req.params.id);
    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }
    return res.status(200).json(url);
  } catch (error) {
    console.error("Error fetching URL:", error);
    return res.status(500).json({ error: "Failed to fetch URL" });
  }
};

// UPDATE (PUT) - Update an entire URL by ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Url.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedUrl = await Url.findByPk(req.params.id);
      return res.status(200).json(updatedUrl);
    }
    return res.status(404).json({ error: "URL not found" });
  } catch (error) {
    console.error("Error updating URL:", error);
    return res.status(500).json({ error: "Failed to update URL" });
  }
};

// PARTIAL UPDATE (PATCH) - Partially update a URL by ID
exports.partialUpdate = async (req, res) => {
  try {
    const url = await Url.findByPk(req.params.id);
    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }
    await url.update(req.body);
    return res.status(200).json(url);
  } catch (error) {
    console.error("Error partially updating URL:", error);
    return res.status(500).json({ error: "Failed to partially update URL" });
  }
};

// DELETE - Remove a URL by ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Url.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    return res.status(404).json({ error: "URL not found" });
  } catch (error) {
    console.error("Error deleting URL:", error);
    return res.status(500).json({ error: "Failed to delete URL" });
  }
};

const { Category } = require("../database/models/Category"); // Import the Category model

// CREATE - Add a new category
exports.createCategories = async (req, res) => {
  try {
    const { name, type, parent_id } = req.body;

    // Validate required fields
    if (!name || !type || !parent_id) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Create the category
    const newCategory = await Category.create({ name, type, parent_id });
    return res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
};

// READ - Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
};

// READ - Get a single category by ID
exports.getByCategoriesId = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findOne({ where: { id } });

    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
};

// UPDATE (PUT) - Update an entire category by ID
exports.updateCategories = async (req, res) => {
  const { id } = req.params;
  const { name, type, parent_id } = req.body;

  try {
    const category = await Category.findOne({ where: { id } });

    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    // Update the category details
    category.name = name || category.name;
    category.type = type || category.type;
    category.parent_id = parent_id || category.parent_id;

    await category.save();
    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
};

// PARTIAL UPDATE (PATCH) - Partially update a category by ID
exports.partialUpdateCategories = async (req, res) => {
  const { id } = req.params;
  const updates = req.body; // Partial fields to update

  try {
    const category = await Category.findOne({ where: { id } });

    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    // Apply partial updates to the category
    Object.keys(updates).forEach((key) => {
      if (category[key] !== undefined) {
        category[key] = updates[key];
      }
    });

    await category.save();
    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
};

// DELETE - Remove a category by ID
exports.deleteCategories = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findOne({ where: { id } });

    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    await category.destroy();
    return res.status(200).json({ msg: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
};

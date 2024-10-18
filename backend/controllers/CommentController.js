const Comments = require("../database/models/Comment");
const User = require("../database/models/User");

// CREATE - Add a new comment
const create = async (req, res) => {
  try {
    const comment = await Comments.create(req.body);
    res.status(201).json({
      msg: comment.name + " was created successfully",
      ...comment.dataValues,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ - Get all comments
const getAll = async (req, res) => {
  try {
    // Fetch all comments including the related user data
    const comments = await Comments.findAll({
      include: [
        {
          model: User, // Assuming Comments belongs to User
          attributes: ["name"], // Select only the 'name' field from the User model
        },
      ],
    });

    // Format response data to include the user_name
    const formattedComments = comments.map((comment) => ({
      id: comment.id,
      content: comment.content,
      type: comment.type,
      user_id: comment.user_id,
      user_name: comment.User.name, // Assuming User model has 'name' field
      parent_id: comment.parent_id,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    }));

    res.status(200).json(formattedComments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch comments", error: error.message });
  }
};

// READ - Get a single comment by ID
const getById = async (req, res) => {
  try {
    const comment = await Comments.findByPk(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comments not found" });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE (PUT) - Update an entire comment by ID
const update = async (req, res) => {
  try {
    const comment = await Comments.findByPk(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comments not found" });
    }
    await comment.update(req.body);
    res.status(200).json({
      msg: comment.name + " has been updated successfully",
      ...comment.dataValues,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PARTIAL UPDATE (PATCH) - Partially update a comment by ID
const partialUpdate = async (req, res) => {
  try {
    const comment = await Comments.findByPk(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comments not found" });
    }
    await comment.update(req.body);
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE - Remove a comment by ID
const deleteComment = async (req, res) => {
  try {
    const comment = await Comments.findByPk(req.params.id);
    if (!comment) {
      return res.status(404).json({ msg: "Comments not found" });
    }
    await comment.destroy();
    return res
      .status(204)
      .json({ msg: comment.content + "was deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  partialUpdate,
  delete: deleteComment,
};

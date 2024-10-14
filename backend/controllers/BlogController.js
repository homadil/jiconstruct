const Blog = require("../database/models/Blog");
const Category = require("../database/models/Category");
const Tag = require("../database/models/Tag");
const Media = require("../database/models/Media");
const User = require("../database/models/User");

// CREATE - Add a new blog
exports.create = async (req, res) => {
  try {
    const { title, content, author_id, categories, tags } = req.body;
    const mediaFiles = req.files; // Retrieve uploaded media files from request

    // Create the blog
    const blog = await Blog.create({ title, content, author_id });

    // Handle Categories
    if (categories && categories.length > 0) {
      const categoryIds = categories.map((category) => category.id);
      await blog.addCategories(categoryIds);
    }

    // Handle Tags
    if (tags && tags.length > 0) {
      const tagIds = tags.map((tag) => tag.id);
      await blog.addTags(tagIds);
    }

    // Handle Media
    if (mediaFiles && mediaFiles.length > 0) {
      const mediaData = mediaFiles.map((file) => ({
        parent_id: blog.id, // Associate media with the blog
        type: "blog", // Set type to "blog"
        path: file.path, // Save the file path directly from multer
        exe: file.mimetype.split("/")[0], // Determine if it's an image or video
      }));
      await Media.bulkCreate(mediaData);
    }

    return res
      .status(201)
      .json({ message: "Blog created successfully.", blog });
  } catch (error) {
    console.error("Error creating blog:", error);
    return res.status(500).json({ message: "Error creating blog.", error });
  }
};

// READ - Get all blogs with relationships
exports.getAll = async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      include: [
        { model: Category, through: { attributes: [] } },
        { model: Tag, through: { attributes: [] } },
        { model: Media },
      ],
    });
    return res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return res.status(500).json({ message: "Error fetching blogs.", error });
  }
};

// READ - Get a single blog by ID with relationships
exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findOne({
      where: { id },
      include: [
        { model: Category, through: { attributes: [] } },
        { model: Tag, through: { attributes: [] } },
        { model: Media },
      ],
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    return res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return res.status(500).json({ message: "Error fetching blog.", error });
  }
};

// UPDATE (PUT) - Update an entire blog by ID
exports.update = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    await blog.update(req.body);

    // Handle Categories, Tags, and Media in a similar manner as in create
    // This part can be customized as per your application needs

    return res
      .status(200)
      .json({ message: "Blog updated successfully.", blog });
  } catch (error) {
    console.error("Error updating blog:", error);
    return res.status(500).json({ message: "Error updating blog.", error });
  }
};

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
exports.partialUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    await blog.update(req.body);

    return res
      .status(200)
      .json({ message: "Blog partially updated successfully.", blog });
  } catch (error) {
    console.error("Error partially updating blog:", error);
    return res
      .status(500)
      .json({ message: "Error partially updating blog.", error });
  }
};

// DELETE - Remove a blog by ID
exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    await blog.destroy();
    return res.status(200).json({ message: "Blog deleted successfully." });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return res.status(500).json({ message: "Error deleting blog.", error });
  }
};

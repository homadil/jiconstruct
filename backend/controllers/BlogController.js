const Blog = require("../database/models/Blog");

// CREATE - Add a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, content, show, quote, categories, tags, media } = req.body;
    const author_id = req.user.id;
    const newBlog = await Blog.create({
      title,
      content,
      show,
      quote,
      author_id,
    });

    // Handle categories if provided
    if (categories && categories.length > 0) {
      const categoryInstances = await Category.findAll({
        where: { name: categories }, // Find categories that match the provided names
      });

      await newBlog.setCategories(categoryInstances); // Associate categories with the blog
    }

    res.status(201).json(newBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// READ - Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// READ - Get a single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findOne({ where: { id: req.params.id } });
    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// UPDATE (PUT) - Update an entire blog by ID
exports.updateBlog = async (req, res) => {
  try {
    const { title, content, author, category } = req.body;
    const blog = await Blog.findOne({ where: { id: req.params.id } });

    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    blog.title = title;
    blog.content = content;
    blog.author = author;
    blog.category = category;
    await blog.save();

    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// PARTIAL UPDATE (PATCH) - Partially update a blog by ID
exports.partialUpdateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ where: { id: req.params.id } });

    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    // Update only the fields provided in the request
    for (let key in req.body) {
      blog[key] = req.body[key];
    }

    await blog.save();
    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// DELETE - Remove a blog by ID
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ where: { id: req.params.id } });

    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    await blog.destroy();
    res.status(200).json({ msg: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

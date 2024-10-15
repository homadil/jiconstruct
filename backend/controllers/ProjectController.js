const Project = require("../database/models/Project");

exports.createBlog = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    return res.status(201).json(newProject);
  } catch (error) {
    console.error("Error creating project:", error);
    return res.status(500).json({ message: "Error creating project.", error });
  }
};

exports.getAllProject = async (req, res) => {
  try {
    const projects = await Project.findAll();
    return res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return res.status(500).json({ message: "Error fetching projects.", error });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }
    return res.status(200).json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    return res.status(500).json({ message: "Error fetching project.", error });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }
    await project.update(req.body);
    return res.status(200).json(project);
  } catch (error) {
    console.error("Error updating project:", error);
    return res.status(500).json({ message: "Error updating project.", error });
  }
};

exports.partialUpdateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }
    await project.update(req.body);
    return res.status(200).json(project);
  } catch (error) {
    console.error("Error partially updating project:", error);
    return res
      .status(500)
      .json({ message: "Error partially updating project.", error });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }
    await project.destroy();
    return res.status(200).json({ message: "Project deleted successfully." });
  } catch (error) {
    console.error("Error deleting project:", error);
    return res.status(500).json({ message: "Error deleting project.", error });
  }
};

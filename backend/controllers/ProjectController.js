const Project = require("../database/models/Project");
const Media = require("../database/models/Media");
const Location = require("../database/models/Location");
const path = require("path");
const Tag = require("../database/models/Tag");
const Category = require("../database/models/Category");
const Url = require("../database/models/Url");

exports.create = async (req, res) => {
  const transaction = await Project.sequelize.transaction(); // Start a transaction

  try {
    const data = req.body; // Retrieve data from the request body

    // Step 1: Create or use existing location
    let location;
    if (data.location_id !== null) {
      location = await Location.create(
        {
          country: data.country,
          state: data.state,
          city: data.city,
          address: data.address,
        },
        { transaction }
      );
    } else {
      location = await Location.findByPk(data.location_id);
      if (!location) {
        throw new Error("Invalid location_id");
      }
    }

    // Step 2: Create the project
    const project = await Project.create(
      {
        title: data.title,
        description: data.description,
        content: data.content,
        start_date: data.start_date,
        end_date: data.end_date,
        client: data.client,
        director: data.director,
        location_id: location.id,
        budget: data.budget,
        show: req.files["show"]
          ? req.files["show"][0].path.replace(/^public[\\/]/, "")
          : null, // Assuming 'show' is a file
      },
      { transaction }
    );

    // Step 3: Associate media files (ProjectMedia)
    if (req.files["files"] && req.files["files"].length > 0) {
      const mediaPromises = req.files["files"].map((file) => {
        return Media.create(
          {
            parent_id: project.id,
            type: "project",
            path: file.path.replace(/^public[\\/]/, ""),
            exe: file.mimetype.startsWith("video") ? "video" : "image", // File type check
          },
          { transaction }
        );
      });
      const mediaFiles = await Promise.all(mediaPromises);
      await project.addMedia(mediaFiles, { transaction });
    }

    //change relationships to array
    if (!Array.isArray(data.categories)) {
      data.categories = [data.categories];
    }
    if (!Array.isArray(data.tags)) {
      data.tags = [data.tags];
    }
    if (!Array.isArray(data.urls)) {
      data.urls = [data.urls];
    }

    // Step 4: Associate categories (ProjectCategories)
    if (data.categories && data.categories.length > 0) {
      // Parse JSON strings back to objects

      const parsedCategories = data.categories.map((category) =>
        JSON.parse(category)
      );

      // Extract IDs from parsed category objects
      const categoryIds = parsedCategories.map((category) => category.id);

      const categories = await Category.findAll({
        where: {
          id: categoryIds,
        },
        transaction,
      });

      await project.addCategories(categories, { transaction });
    }

    // Step 5: Associate tags (ProjectTags)
    if (data.tags && data.tags.length > 0) {
      // Parse JSON strings back to objects
      const parsedTags = data.tags.map((tag) => JSON.parse(tag));

      // Extract IDs from parsed tag objects
      const tagIds = parsedTags.map((tag) => tag.id);

      const tags = await Tag.findAll({
        where: {
          id: tagIds,
        },
        transaction,
      });

      await project.addTags(tags, { transaction });
    }

    // Step 6: Associate URLs (ProjectUrl)
    if (data.urls && data.urls.length > 0) {
      // Parse JSON strings back to objects
      const parsedUrls = data.urls.map((url) => JSON.parse(url));

      // Extract IDs from parsed URL objects
      const urlIds = parsedUrls.map((url) => url.id);

      const urls = await Url.findAll({
        where: {
          id: urlIds,
        },
        transaction,
      });

      await project.addUrls(urls, { transaction });
    }

    // Commit transaction
    await transaction.commit();

    return res.json({ msg: "Project was created successfully" });
  } catch (error) {
    // Rollback transaction on error
    await transaction.rollback();
    return res.status(500).json({ error: "Project creation failed" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const projects = await Project.findAll({
      include: [
        {
          model: Location,
          as: "location", // Ensure the alias matches what is defined in your association
        },
        {
          model: Category,
          through: { attributes: [] }, // Include categories via the ProjectCategories association
        },
        {
          model: Tag,
          through: { attributes: [] }, // Include tags via the ProjectTag association
        },
        {
          model: Url,
          through: { attributes: [] }, // Include URLs via the ProjectUrl association
        },
        { model: Media },
      ],
    });
    return res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return res.status(500).json({ message: "Error fetching projects.", error });
  }
};

exports.getById = async (req, res) => {
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

exports.update = async (req, res) => {
  const transaction = await Project.sequelize.transaction(); // Start a transaction

  try {
    const { id } = req.params;
    const data = req.body; // Retrieve data from the request body

    // Find the project by ID
    const project = await Project.findByPk(id);
    if (!project) {
      throw new Error("Project not found");
    }

    // Step 1: Update or use existing location
    let location;
    if (data.location_id !== null) {
      location = await Location.create(
        {
          country: data.country,
          state: data.state,
          city: data.city,
          address: data.address,
        },
        { transaction }
      );
    } else {
      location = await Location.findByPk(data.location_id);
      if (!location) {
        throw new Error("Invalid location_id");
      }
    }

    // Step 2: Update project details
    await project.update(
      {
        title: data.title,
        description: data.description,
        content: data.content,
        start_date: data.start_date,
        end_date: data.end_date,
        client: data.client,
        director: data.director,
        location_id: location.id,
        budget: data.budget,
        show: req.files["show"]
          ? req.files["show"][0].path.replace(/^public[\\/]/, "")
          : project.show, // If a new show file is provided, replace it
      },
      { transaction }
    );

    // Step 3: Handle media deletion based on conditions

    // If req.deletePrevMedia is true, delete all previous media associated with the project
    if (req.body.deletePrevMedia) {
      await Media.destroy({
        where: { parent_id: project.id, type: "project" },
        transaction,
      });
    }

    // If req.files["show"] is provided, delete the existing media related to 'show' and replace it
    if (req.files["show"]) {
      await Media.destroy({
        where: { parent_id: project.id, type: "project", exe: "image" },
        transaction,
      });
    }

    // Step 4: Upload new media files if provided
    if (req.files["files"] && req.files["files"].length > 0) {
      const mediaPromises = req.files["files"].map((file) => {
        return Media.create(
          {
            parent_id: project.id,
            type: "project",
            path: file.path.replace(/^public[\\/]/, ""),
            exe: file.mimetype.startsWith("video") ? "video" : "image", // File type check
          },
          { transaction }
        );
      });
      await Promise.all(mediaPromises);
    }

    // Step 5: Update categories (ProjectCategories)
    if (data.categories && data.categories.length > 0) {
      if (!Array.isArray(data.categories)) {
        data.categories = [data.categories];
      }

      const parsedCategories = data.categories.map((category) =>
        JSON.parse(category)
      );
      const categoryIds = parsedCategories.map((category) => category.id);

      const categories = await Category.findAll({
        where: { id: categoryIds },
        transaction,
      });

      await project.setCategories(categories, { transaction }); // Update categories
    }

    // Step 6: Update tags (ProjectTags)
    if (data.tags && data.tags.length > 0) {
      if (!Array.isArray(data.tags)) {
        data.tags = [data.tags];
      }

      const parsedTags = data.tags.map((tag) => JSON.parse(tag));
      const tagIds = parsedTags.map((tag) => tag.id);

      const tags = await Tag.findAll({
        where: { id: tagIds },
        transaction,
      });

      await project.setTags(tags, { transaction }); // Update tags
    }

    // Step 7: Update URLs (ProjectUrl)
    if (data.urls && data.urls.length > 0) {
      if (!Array.isArray(data.urls)) {
        data.urls = [data.urls];
      }

      const parsedUrls = data.urls.map((url) => JSON.parse(url));
      const urlIds = parsedUrls.map((url) => url.id);

      const urls = await Url.findAll({
        where: { id: urlIds },
        transaction,
      });

      await project.setUrls(urls, { transaction }); // Update URLs
    }

    // Commit transaction after all updates
    await transaction.commit();

    return res.json({ msg: "Project updated successfully" });
  } catch (error) {
    // Rollback transaction on error
    await transaction.rollback();
    console.error("Error updating project:", error);
    return res
      .status(500)
      .json({ error: "Project update failed", details: error.message });
  }
};

exports.partialUpdate = async (req, res) => {
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

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }

    // Delete associated media
    await Media.destroy({
      where: {
        parent_id: id,
        type: "project", // Assuming ProjectId is the foreign key in the Media table
      },
    });

    await project.destroy();
    return res
      .status(200)
      .json({ msg: "Project and associated media deleted successfully." });
  } catch (error) {
    console.error("Error deleting project:", error);
    return res.status(500).json({ msg: "Error deleting project.", error });
  }
};

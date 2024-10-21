import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Modal,
  TextField,
  Select,
  MenuItem,
  Chip,
  FormControl,
  InputLabel,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify"; // Assuming you use react-toastify for notifications
import apiRequest from "../../../apiRequest";
import Loader from "../../../components/Loader";
import ProjectForm from "../../../components/DataBaseForms/ProjectForm";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [urls, setUrls] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedUrls, setSelectedUrls] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    start_date: "",
    end_date: "",
    client: "",
    director: "",
    location_id: null,
    budget: "",
    show: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState({
    project: false,
    category: false,
    url: false,
    tag: false,
  });

  useEffect(() => {
    setLoading({ ...loading, project: true });
    setLoading({ ...loading, category: true });
    setLoading({ ...loading, url: true });
    setLoading({ ...loading, tag: true });

    fetchProjects();
    fetchCategories();
    fetchUrls();
    fetchTags();
  }, []);

  const fetchProjects = async () => {
    // Fetch projects from the backend
    apiRequest
      .get("/projects")
      .then((res) => {
        setProjects(res);
      })
      .finally(() => {
        setLoading({ ...loading, project: false });
      });
  };

  const fetchCategories = async () => {
    // Fetch categories from the backend
    apiRequest
      .get("/categories")
      .then((res) => {
        setCategories(res);
      })
      .finally(() => {
        setLoading({ ...loading, category: false });
      });
  };

  const fetchUrls = async () => {
    // Fetch URLs from the backend
    apiRequest
      .get("/urls")
      .then((res) => {
        setUrls(res);
      })
      .finally(() => {
        setLoading({ ...loading, url: false });
      });
  };

  const fetchTags = async () => {
    // Fetch tags from the backend
    apiRequest
      .get("/tags")
      .then((res) => {
        setTags(res);
      })
      .finally(() => {
        setLoading({ ...loading, tag: false });
      });
  };

  const handleOpenModal = (project = null) => {
    setOpenModal(true);
    if (project) {
      setUpdate(true);
      setCurrentProjectId(project.id);
      setFormData({
        title: project.title,
        description: project.description,
        content: project.content,
        start_date: project.start_date,
        end_date: project.end_date,
        client: project.client,
        director: project.director,
        location_id: project.location_id,
        budget: project.budget,
      });
      // Reset selected options
      setSelectedCategories(project.categories.map((c) => c.id));
      setSelectedUrls(project.urls.map((u) => u.id));
      setSelectedTags(project.tags.map((t) => t.id));
    } else {
      setUpdate(false);
      setCurrentProjectId(null);
      setFormData({
        title: "",
        description: "",
        content: "",
        start_date: "",
        end_date: "",
        client: "",
        director: "",
        location_id: null,
        budget: "",
      });
      setSelectedCategories([]);
      setSelectedUrls([]);
      setSelectedTags([]);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveProject = (e) => {
    e.preventDefault();
    const projectData = {
      ...formData,
      categories: selectedCategories,
      urls: selectedUrls,
      tags: selectedTags,
      files: files,
    };

    console.log(projectData);
    // try {
    //   if (update) {
    //     apiRequest.put(`/projects/${currentProjectId}`, projectData).then();
    //   } else {
    //     apiRequest.put(`/projects`, projectData).then();
    //   }
    //   fetchProjects(); // Refresh project list
    //   handleCloseModal();
    // } catch (error) {
    //   toast.error("Failed to save project");
    // }
  };

  const handleDeleteProject = async (id) => {
    try {
      await apiRequest.delete(`/api/projects/${id}`);
      fetchProjects(); // Refresh project list
    } catch (error) {
      toast.error("Failed to delete project");
    }
  };

  if (loading.category || loading.project || loading.tag || loading.url) {
    <Loader />;
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenModal()}
      >
        Add More
      </Button>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.title}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    onClick={() => handleOpenModal(project)}
                    startIcon={<FontAwesomeIcon icon={faEdit} />}
                  >
                    Update
                  </Button>
                  <Button
                    color="error"
                    onClick={() => handleDeleteProject(project.id)}
                    startIcon={<FontAwesomeIcon icon={faTrash} />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={openModal} onClose={handleCloseModal}>
        <ProjectForm
          update={update}
          formData={formData}
          handleFormChange={handleFormChange}
          setFormData={setFormData}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          categories={categories}
          selectedUrls={selectedUrls}
          setSelectedUrls={setSelectedUrls}
          selectedTags={selectedTags}
          urls={urls}
          setSelectedTags={setSelectedTags}
          tags={tags}
          setFiles={setFiles}
          files={files}
          handleCloseModal={handleCloseModal}
          handleSaveProject={handleSaveProject}
        />
      </Modal>
    </div>
  );
};

export default Project;

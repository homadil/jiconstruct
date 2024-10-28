import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import apiRequest from "../../../apiRequest";
import Loader from "../../../components/Loader";
import { Helmet } from "react-helmet-async";

export default function Category() {
  const [Categories, setCategories] = useState([]);
  const [loader, setLoader] = useState([]);
  const [id, setID] = useState(null);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    apiRequest
      .get("/categories")
      .then((res) => setCategories(res))
      .finally(() => setLoader(false));
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    icon: "",
  });

  // Modal Handlers
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Add Tag
  const handleAddCategory = (formData) => {
    apiRequest
      .post(
        `/Categories`,
        formData,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        Categories.push(res);
        setCategories(Categories);
        handleCloseModal();
      });
  };

  // Delete Tag
  const handleDeleteTeam = (id) => {
    apiRequest
      .delete(`/categories/${id}`)
      .then((res) => {
        const updatedTags = Categories.filter((Tag) => Tag.id !== id);
        setCategories(updatedTags);
      })
      .finally(() => {});
  };

  // Update Tag (Mock)
  const handleUpdateTag = (id, formData) => {
    apiRequest
      .put(
        `/categories/${id}`,
        formData,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const updatedTags = Categories.map((item) =>
          item.id === res.id ? (item = res) : item
        );
        setCategories(updatedTags); // Update the Categories state with the updated data
        handleCloseModal(); // Close the modal after successful update
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: newCategory.name,
      description: newCategory.description,
      icon: newCategory.icon,
    };

    if (update) {
      handleUpdateTag(id, formData);
    } else {
      handleAddCategory(formData);
    }
  }

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="container">
      <Helmet>
        <title>Ji Construct | Admin | Category</title>
      </Helmet>
      <h3>Categories </h3>
      <Button
        variant="contained"
        color="primary"
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        onClick={() => {
          handleOpenModal();
          setUpdate(false);
          setNewCategory({
            name: "",
          });
        }}
      >
        Add More
      </Button>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Categories.map((Tag) => (
              <TableRow key={Tag.id}>
                <TableCell>
                  <Typography variant="h6">{Tag.name}</Typography>
                  <Typography variant="h6">{Tag.description}</Typography>
                  <Typography variant="h6">{Tag.icon}</Typography>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<FontAwesomeIcon icon={faEdit} />}
                    onClick={() => {
                      setID(Tag.id);
                      handleOpenModal();
                      setUpdate(true);
                      setNewCategory(Tag);
                    }}
                    style={{ marginBottom: "4px" }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<FontAwesomeIcon icon={faTrash} />}
                    className="ms-2"
                    onClick={() => {
                      setID(Tag.id);
                      handleDeleteTeam(Tag.id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Tag Modal */}
      <Modal open={showModal} onClose={handleCloseModal}>
        <form onSubmit={handleSubmit} className="p-4" style={modalStyle}>
          <Typography variant="h6">{update ? "Update" : "Add"} Tag</Typography>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            required={update ? false : true}
            value={newCategory.name}
            onChange={(e) =>
              setNewCategory({ ...newCategory, name: e.target.value })
            }
            className="mt-3"
          />

          <TextField
            label="Description"
            fullWidth
            variant="outlined"
            required={update ? false : true}
            value={newCategory.description}
            onChange={(e) =>
              setNewCategory({ ...newCategory, description: e.target.value })
            }
            className="mt-3"
          />

          <TextField
            label="Icon"
            fullWidth
            variant="outlined"
            required={update ? false : true}
            value={newCategory.icon}
            onChange={(e) =>
              setNewCategory({ ...newCategory, icon: e.target.value })
            }
            className="mt-3"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="mt-4"
          >
            {update ? "Update" : "Add"} Tag
          </Button>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            className="mt-4"
            type="submit"
            disabled={loader} // Disable button when loading
          >
            {loader ? (
              <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} /> // Spinner when loading
            ) : !update ? (
              "Submit"
            ) : (
              "Update"
            )}
          </Button>
        </form>
      </Modal>
    </div>
  );
}

// Modal style
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  boxShadow: 24,
  padding: "16px",
  maxWidth: "600px",
  width: "100%",
};

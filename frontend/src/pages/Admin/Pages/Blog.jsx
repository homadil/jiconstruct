import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Modal,
  Box,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import apiRequest from "../../../apiRequest";
import { Container } from "react-bootstrap";
import BlogForm from "../../../components/DataBaseForms/BlogForm";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxHeight: "90vh", // Restrict the height to 90% of the viewport height
  overflowY: "auto", // Enable vertical scroll when content overflows
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  useEffect(() => {
    apiRequest.get("/blogs").then((res) => {
      const blogs = res;
      setBlogs(blogs);
    });
  }, []);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleEdit = (id) => {
    // Logic to update blog by ID
  };

  const handleDelete = (id) => {
    apiRequest.delete(`/blogs/${id}`).then(() => {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    });
  };

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        onClick={handleOpenModal}
        style={{ marginBottom: "20px" }}
      >
        Create New Blog
      </Button>

      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.description}
                </Typography>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <IconButton
                    color="primary"
                    onClick={() => handleEdit(blog.id)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </IconButton>

                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(blog.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          {/* Form or Content for Add Modal */}
          <BlogForm />
          <Button
            onClick={handleCloseModal}
            color="danger"
            variant="contained"
            style={{ color: "red" }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

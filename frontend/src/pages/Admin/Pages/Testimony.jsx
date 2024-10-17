import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Modal,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import apiRequest from "../../../apiRequest";

export default function Testimony() {
  const [testimonies, setTestimonies] = useState([]);
  const [loader, setLoader] = useState([]);

  useEffect(() => {
    apiRequest
      .get("/testimonies")
      .then((res) => setTestimonies(res))
      .finally(() => setLoader(false));
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [newTestimony, setNewTestimony] = useState({
    comment: "",
    name: "",
    position: "",
    image: "",
  });

  // Modal Handlers
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Add Testimony
  const handleAddTestimony = () => {
    setTestimonies([
      ...testimonies,
      { ...newTestimony, id: testimonies.length + 1 },
    ]);
    setNewTestimony({ comment: "", name: "", position: "", image: "" });
    handleCloseModal();
  };

  // Delete Testimony
  const handleDeleteTestimony = (id) => {
    const updatedTestimonies = testimonies.filter(
      (testimony) => testimony.id !== id
    );
    setTestimonies(updatedTestimonies);
  };

  // Update Testimony (Mock)
  const handleUpdateTestimony = (id) => {
    alert(`Update testimony with id ${id}`); // You can implement an actual update logic here
  };

  return (
    <div className="container">
      <h3>Testimonies</h3>
      <Button
        variant="contained"
        color="primary"
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        onClick={handleOpenModal}
      >
        Add More
      </Button>

      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {testimonies.map((testimony) => (
          <Grid item xs={12} md={6} key={testimony.id}>
            <Card className="p-3" style={{ position: "relative" }}>
              <Typography variant="h6">{testimony.name}</Typography>
              <Typography variant="body1">{testimony.position}</Typography>
              <Typography variant="body2" className="mt-2">
                {testimony.comment}
              </Typography>
              <div className="mt-3">
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<FontAwesomeIcon icon={faEdit} />}
                  onClick={() => handleUpdateTestimony(testimony.id)}
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<FontAwesomeIcon icon={faTrash} />}
                  className="ms-2"
                  onClick={() => handleDeleteTestimony(testimony.id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add Testimony Modal */}
      <Modal open={showModal} onClose={handleCloseModal}>
        <div className="p-4" style={modalStyle}>
          <Typography variant="h6">Add Testimony</Typography>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            value={newTestimony.name}
            onChange={(e) =>
              setNewTestimony({ ...newTestimony, name: e.target.value })
            }
            className="mt-3"
          />
          <TextField
            label="Position"
            fullWidth
            variant="outlined"
            value={newTestimony.position}
            onChange={(e) =>
              setNewTestimony({ ...newTestimony, position: e.target.value })
            }
            className="mt-3"
          />
          <TextField
            label="Comment"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={newTestimony.comment}
            onChange={(e) =>
              setNewTestimony({ ...newTestimony, comment: e.target.value })
            }
            className="mt-3"
          />
          <TextField
            label="Image URL"
            fullWidth
            variant="outlined"
            value={newTestimony.image}
            onChange={(e) =>
              setNewTestimony({ ...newTestimony, image: e.target.value })
            }
            className="mt-3"
          />
          <Button
            variant="contained"
            color="primary"
            className="mt-4"
            onClick={handleAddTestimony}
          >
            Add Testimony
          </Button>
        </div>
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

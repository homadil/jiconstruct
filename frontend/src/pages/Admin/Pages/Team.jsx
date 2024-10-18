import React, { useContext, useEffect, useState } from "react";
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
import Loader from "../../../components/Loader";
import { DataContext } from "../../../store";
export default function Team() {
  const [teams, setTeams] = useState([]);
  const [loader, setLoader] = useState([]);
  const { backend_url } = useContext(DataContext);
  const [id, setID] = useState(null);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    apiRequest
      .get("/teams")
      .then((res) => setTeams(res))
      .finally(() => setLoader(false));
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [newTeam, setNewTeam] = useState({
    name: "",
    position: "",
    image: "",
  });

  // Modal Handlers
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Add Team
  const handleAddTeam = (formData) => {
    apiRequest
      .post(
        `/teams`,
        formData,
        {},
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        teams.push(res);
        setTeams(teams);
        handleCloseModal();
      });
  };

  // Delete Team
  const handleDeleteTeam = (id) => {
    apiRequest
      .delete(`/teams/${id}`)
      .then((res) => {
        const updatedTestimonies = teams.filter((Team) => Team.id !== id);
        setTeams(updatedTestimonies);
      })
      .finally(() => {});
  };

  // Update Team (Mock)
  const handleUpdateTeam = (id, formData) => {
    apiRequest
      .put(
        `/teams/${id}`,
        formData,
        {},
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        const updatedTestimonies = teams.map((item) =>
          item.id === res.id ? (item = res) : item
        );
        console.log(res);
        setTeams(updatedTestimonies); // Update the teams state with the updated data
        handleCloseModal(); // Close the modal after successful update
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("files", newTeam.image);
    formData.append("comment", newTeam.comment);
    formData.append("name", newTeam.name);
    formData.append("position", newTeam.position);

    if (update) {
      handleUpdateTeam(id, formData);
    } else {
      handleAddTeam(formData);
    }
  }

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="container">
      <h3>Teams </h3>
      <Button
        variant="contained"
        color="primary"
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        onClick={() => {
          handleOpenModal();
          setUpdate(false);
          setNewTeam({
            comment: "",
            name: "",
            image: "",
          });
        }}
      >
        Add More
      </Button>

      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {teams.map((Team) => (
          <Grid item xs={12} md={6} key={Team.id}>
            <Card className="p-3" style={{ position: "relative" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <img
                    src={backend_url + "/" + Team.image}
                    alt={Team.name}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">{Team.name}</Typography>
                  <Typography variant="body1">{Team.position}</Typography>

                  <div className="mt-3">
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<FontAwesomeIcon icon={faEdit} />}
                      onClick={() => {
                        setID(Team.id);
                        handleOpenModal();
                        setUpdate(true);
                        setNewTeam(Team);
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<FontAwesomeIcon icon={faTrash} />}
                      className="ms-2"
                      onClick={() => {
                        setID(Team.id);
                        handleDeleteTeam(Team.id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add Team Modal */}
      <Modal open={showModal} onClose={handleCloseModal}>
        <form
          onSubmit={handleSubmit}
          className="p-4"
          style={modalStyle}
          encType="multipart/form-data"
        >
          <Typography variant="h6">{update ? "Update" : "Add"} Team</Typography>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            required={update ? false : true}
            value={newTeam.name}
            onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
            className="mt-3"
          />
          <TextField
            label="Position"
            fullWidth
            variant="outlined"
            required={update ? false : true}
            value={newTeam.position}
            onChange={(e) =>
              setNewTeam({ ...newTeam, position: e.target.value })
            }
            className="mt-3"
          />
          <input
            type="file"
            accept="image/*"
            className="form-control mt-3"
            required={update ? false : true}
            onChange={(e) => {
              setNewTeam({ ...newTeam, image: e.target.files[0] });
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="mt-4"
          >
            {update ? "Update" : "Add"} Team
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

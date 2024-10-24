import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import apiRequest from "../../apiRequest";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/ji_construct_logo.png";
import bg from "../../assets/images/dummy/download_11.webp";
export default function SignUp() {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleHover = () => setIsHovered(!isHovered);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (formData.password !== formData.cpassword) {
      setLoading(false);
      return toast.error("Password do not Match!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    function reDirect(res, ifAdmin, ifNotAdmin) {
      if (res.user.role === "admin") {
        navigate(ifAdmin); // Navigate to the admin page
      } else {
        // Go back to the previous page or navigate to home if no previous page
        if (window.history.length > 1) {
          window.history.back();
        } else {
          navigate(ifNotAdmin); // Navigate to home if no previous page
        }
      }
    }

    apiRequest
      .post("/auth/register", formData)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.token));
        localStorage.setItem("user", JSON.stringify(res.user));
        setLoading(false);
        setTimeout(() => {
          reDirect(res, "/admin", "/");
        }, 2000);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error during registration:", error);
        // Handle error (e.g., show a notification)
      });
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  return (
    <Container fluid className="p-0">
      <Row className="min-vh-100 align-items-center">
        {/* Image Section - hidden on mobile */}
        <Col md={6} className="d-none d-md-block">
          <div
            className=""
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: "1000",
              height: "60vh",
              width: "maxContent",
              border: "3px solid #000000",
              borderRadius: "10px",
            }}
          ></div>
        </Col>

        {/* Form Section */}
        <Col xs={12} md={6} className="p-5 d-flex justify-content-center">
          <Box
            sx={{
              width: "100%",
              maxWidth: 400,
              p: 3,
              backgroundColor: "#ffffff",
              borderRadius: 2,
              boxShadow: 3,
              transition: "transform 0.3s ease",
              transform: isHovered ? "translateY(-10px)" : "translateY(0)",
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            {/* Space for Logo */}
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              align="center"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              <img src={logo} alt="" height={100} />
            </Typography>

            <Form onSubmit={handleSubmit}>
              {/* Name Input */}
              <Form.Group controlId="formUserName" className="mb-3">
                <Form.Label>UserName</Form.Label>
                <div className="d-flex align-items-center">
                  <div style={{ width: "10%" }}>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div style={{ width: "90%" }}>
                    <Form.Control
                      type="text"
                      placeholder="Enter Username"
                      autoComplete="username"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="py-2"
                    />
                  </div>
                </div>
              </Form.Group>

              {/* Email Input */}
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <div className="d-flex align-items-center">
                  <div style={{ width: "10%" }}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div style={{ width: "90%" }}>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required
                      className="py-2"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </Form.Group>

              {/* Password Input */}

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <div className="d-flex align-items-center">
                  <div style={{ width: "10%" }}>
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                  </div>
                  <div style={{ width: "90%" }}>
                    <Form.Control
                      type="password"
                      required
                      className="py-2"
                      placeholder="Enter Password "
                      onChange={handleChange}
                      value={formData.password}
                      name="password"
                    />
                  </div>
                </div>
              </Form.Group>

              {/*Confirm Password Input */}

              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <div className="d-flex align-items-center">
                  <div style={{ width: "10%" }}>
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                  </div>
                  <div style={{ width: "90%" }}>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password Again"
                      required
                      className="py-2"
                      onChange={handleChange}
                      value={formData.cpassword}
                      name="cpassword"
                    />
                  </div>
                </div>
              </Form.Group>

              {/* Forgot Password and Signup Links */}
              <Row className="mb-3">
                <Col xs={12} className="text-end">
                  Already Have an Account ? {"  "}
                  <a href="/sign_in" className="text-secondary">
                    Sign in
                  </a>
                </Col>
              </Row>

              {/* Submit Button */}
              <Button
                variant="primary"
                type="submit"
                className="w-100 py-2"
                style={{
                  backgroundColor: "#000000",
                  border: "none",
                }}
                disabled={loading} // Disable the button when loading is true
              >
                {loading ? (
                  <>
                    <Spinner
                      animation="border"
                      size="sm"
                      style={{ marginRight: "5px" }} // Add some space between spinner and text
                    />
                    Loading...
                  </>
                ) : (
                  "Register"
                )}
              </Button>
            </Form>
          </Box>
        </Col>
      </Row>
    </Container>
  );
}

import {
  Box,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useDropzone } from "react-dropzone";
import apiRequest from "../../apiRequest";

export default function ProjectForm({
  update,
  formData,
  handleFormChange,
  setFormData,
  selectedCategories,
  setSelectedCategories,
  categories,
  selectedUrls,
  setSelectedUrls,
  selectedTags,
  urls,
  setSelectedTags,
  tags,
  setFiles,
  files,
  handleCloseModal,
  handleSaveProject,
}) {
  const styleSheet = {
    addGap: { margin: "6px" },
  };
  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: formData.exe === "image" ? "image/*" : "video/*",
    multiple: true,
  });

  const uploadImageCallback = (file) => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("image", file);

      apiRequest
        .post("/upload", formData)
        .then((response) => {
          resolve({ data: { link: response.data.imageUrl } });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  const handleContentChange = (editorState) => {
    const rawContentState = convertToRaw(editorState.getCurrentContent()); // Convert to raw draft-js state
    const htmlContent = draftToHtml(rawContentState); // Convert raw state to HTML
    setFormData({ ...formData, content: htmlContent }); // Save as stringed HTML in formData
  };

  return (
    <div>
      <div
        style={{
          padding: "20px",
          backgroundColor: "white",
          margin: "100px auto",
          width: "80%",
          maxHeight: "80vh", // Limit the maximum height to 80% of the viewport height
          borderRadius: "8px",
          overflowY: "auto", // Enable vertical scrolling when content exceeds the max height
        }}
      >
        <form
          onSubmit={handleSaveProject}
          encType="multipart/form-data"
          style={modalStyle}
        >
          <div className="d-flex justify-content-between p-4">
            <h2>{update ? "Update Project" : "Add Project"}</h2>
            <Button
              variant="contained"
              style={{ backgroundColor: "red", color: "white" }}
              onClick={handleCloseModal}
            >
              {" "}
              X
            </Button>
          </div>

          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleFormChange}
            fullWidth
            style={styleSheet.addGap}
            required={update ? false : true}
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleFormChange}
            fullWidth
            style={styleSheet.addGap}
            required={update ? false : true}
          />

          <Box sx={{ mt: 2 }}>
            <Editor
              editorState={formData.content}
              onEditorStateChange={handleContentChange}
              required={update ? false : true}
              toolbar={{
                options: [
                  "inline",
                  "blockType",
                  "fontSize",
                  "fontFamily",
                  "list",
                  "textAlign",
                  "colorPicker",
                  "link",
                  "emoji",
                  "image",
                  "history",
                ],
                inline: {
                  options: [
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "monospace",
                    "superscript",
                    "subscript",
                  ],
                },
                fontFamily: {
                  options: [
                    "Arial",
                    "Georgia",
                    "Impact",
                    "Tahoma",
                    "Times New Roman",
                    "Verdana",
                  ],
                },
                list: {
                  options: ["unordered", "ordered", "indent", "outdent"],
                },
                textAlign: { options: ["left", "center", "right", "justify"] },
                link: { options: ["link", "unlink"] },
                image: {
                  uploadEnabled: true,
                  uploadCallback: uploadImageCallback, // Define this function for image upload
                  alt: { present: true, mandatory: false },
                },
              }}
            />
          </Box>

          <TextField
            label="Start Date"
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleFormChange}
            fullWidth
            required={update ? false : true}
            style={styleSheet.addGap}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="End Date"
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={handleFormChange}
            fullWidth
            required={update ? false : true}
            style={styleSheet.addGap}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Client"
            name="client"
            value={formData.client}
            style={styleSheet.addGap}
            onChange={handleFormChange}
            fullWidth
            required={update ? false : true}
          />
          <TextField
            label="Director"
            name="director"
            value={formData.director}
            onChange={handleFormChange}
            style={styleSheet.addGap}
            fullWidth
            required={update ? false : true}
          />
          <TextField
            label="Budget"
            type="number"
            name="budget"
            value={formData.budget}
            style={styleSheet.addGap}
            onChange={handleFormChange}
            fullWidth
            required={update ? false : true}
          />

          <label className="d-flex">
            <Typography variant="body1" style={{ wordWrap: "normal" }}>
              Display Media
            </Typography>
            <input
              type="file"
              accept="image/*"
              style={styleSheet.addGap}
              className="form-control mt-3"
              required={update ? false : true}
              onChange={(e) => {
                setFormData({ ...formData, show: e.target.files[0] });
              }}
            />
          </label>

          <FormControl fullWidth>
            <InputLabel>Categories</InputLabel>
            <Select
              multiple
              style={styleSheet.addGap}
              value={selectedCategories}
              onChange={(e) => setSelectedCategories(e.target.value)}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={categories.find((cat) => cat.id === value)?.name}
                    />
                  ))}
                </div>
              )}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>URLs</InputLabel>
            <Select
              multiple
              style={styleSheet.addGap}
              value={selectedUrls}
              onChange={(e) => setSelectedUrls(e.target.value)}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={urls.find((url) => url.id === value)?.name}
                    />
                  ))}
                </div>
              )}
            >
              {urls.map((url) => (
                <MenuItem key={url.id} value={url.id}>
                  {url.name} {`{ ${url.link}}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Tags</InputLabel>
            <Select
              multiple
              value={selectedTags}
              style={styleSheet.addGap}
              onChange={(e) => setSelectedTags(e.target.value)}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={tags.find((tag) => tag.id === value)?.name}
                    />
                  ))}
                </div>
              )}
            >
              {tags.map((tag) => (
                <MenuItem key={tag.id} value={tag.id}>
                  {tag.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {update && (
            <FormControlLabel
              control={
                <Switch
                  checked={formData.deletePrevMedia} // Control the checked state
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      deletePrevMedia: e.target.checked,
                    })
                  }
                  color="primary" // Change color as needed
                />
              }
              label="Delete Previous Media" // Label for the switch
            />
          )}

          {/* File Drag and Drop */}
          <div
            {...getRootProps()}
            className={`dropzone border p-4 text-center mb-3 ${
              isDragActive ? "bg-light" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            <input {...getInputProps()} required={update ? false : true} />
            <p>
              {isDragActive
                ? "Drop the files here..."
                : "Drag & drop files here, or click to select files"}
            </p>
            {formData.exe === "image" ? (
              <p>Only images are allowed</p>
            ) : (
              <p>Only videos are allowed</p>
            )}
          </div>

          {/* Display Selected Files */}
          {files.length > 0 && (
            <div>
              <h5>Selected Files:</h5>
              <ul className="list-group">
                {files.map((file, idx) => (
                  <li key={idx} className="list-group-item">
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button
            style={styleSheet.addGap}
            variant="contained"
            color="primary"
            type="submit"
          >
            {update ? "Update" : "Add"} Project
          </Button>
        </form>
      </div>
    </div>
  );
}

// Modal style
const modalStyle = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  overflowY: "auto",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  boxShadow: 24,
  padding: "16px",
  maxHeight: "80vh",
  maxWidth: "600px",
  width: "100%",
};

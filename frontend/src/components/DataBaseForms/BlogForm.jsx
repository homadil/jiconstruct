import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import apiRequest from "../../apiRequest";
import Loader from "../Loader";

export default function BlogForm(update = false, id) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState(EditorState.createEmpty());
  const [show, setShow] = useState("");
  const [category, setCategory] = useState("");
  const [serverCategory, setServerCategory] = useState([]);
  const [tag, setTag] = useState([]);
  const [serverTag, setServerTag] = useState([]);
  const [media, setMedia] = useState(null);
  const [loaders, setLoader] = useState({
    category: false,
    tag: false,
  });

  const handleContentChange = (state) => {
    setContent(state);
  };

  const handleFileChange = (e) => {
    setMedia(e.target.files[0]);
  };

  function create(formData) {
    apiRequest
      .post("/blogs", formData)
      .then((response) => {
        console.log("Blog created successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error creating blog:", error);
      });
  }

  function put(formData) {
    apiRequest
      .post(`/blogs/${id}`, formData)
      .then((response) => {
        console.log("Blog created successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error creating blog:", error);
      });
  }

  const handleSubmit = () => {
    const contentHtml = draftToHtml(convertToRaw(content.getCurrentContent()));

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", contentHtml);
    formData.append("category", category);
    formData.append("tag", tag);
    formData.append("show", show);
    if (media) {
      formData.append("media", media);
    }

    if (update) {
      put(formData, id);
    } else {
      create(formData);
    }
  };

  useEffect(() => {
    apiRequest
      .get("/categories")
      .then((res) => {
        setServerCategory(res);
      })
      .catch()
      .finally(() => setLoader((prev) => ({ ...prev, category: true })));

    apiRequest
      .get("/tags")
      .then((res) => {
        setServerTag(res);
      })
      .catch()
      .finally(() => setLoader((prev) => ({ ...prev, tag: true })));
  }, []);

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

  if (!loaders.category || !loaders.tag) {
    return <Loader />;
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <Box>
        <h3>{update ? " Add New Blog" : "Update Blog"}</h3>
      </Box>
      <Box sx={{ p: 3 }}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Box sx={{ mt: 2 }}>
          <Editor
            editorState={content}
            onEditorStateChange={handleContentChange}
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

        <FormControl fullWidth margin="normal">
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
          >
            {serverCategory.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="tag-select-label">Tags</InputLabel>
          <Select
            labelId="tag-select-label"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            label="Tags"
            multiple
          >
            {serverTag.map((t) => (
              <MenuItem key={t.id} value={t.id}>
                {t.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Show Image"
          variant="outlined"
          fullWidth
          value={show}
          margin="normal"
          multiple="false"
          type="file"
          onChange={(e) => {
            setShow(e.currentTarget.value);
          }}
        />

        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          {update ? "Submit" : "Update"}
        </Button>
      </Box>
    </form>
  );
}

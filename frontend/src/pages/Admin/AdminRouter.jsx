import React from "react";
import { useLocation } from "react-router-dom";
import UploadMedia from "./Pages/UploadMedia";
import Blog from "./Pages/Blog";
import Project from "./Pages/Project";
import Team from "./Pages/Team";
export default function AdminRouter() {
  const location = useLocation();

  // Create an instance of URLSearchParams
  const params = new URLSearchParams(location.search);

  // Get reset_token and id from the query parameters
  const page = params.get("page");

  switch (page) {
    case "upload_media":
      return <UploadMedia />;

    case "blog":
      return <Blog />;

    case "project":
      return <Project />;

    case "team":
      return <Team />;

    default:
      return <UploadMedia />;
  }
}

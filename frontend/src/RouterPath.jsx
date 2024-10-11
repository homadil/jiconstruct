import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Details from "./pages/Projects/Details";
import AboutUs from "./pages/Pages/AboutUs";
import ContactUs from "./pages/Pages/ContactUs";
import Grid from "./pages/Projects/Grid";
import Masonry from "./pages/Projects/Masonry";
import Carousel from "./pages/Projects/Carousel";
import Image from "./pages/Post/Image";
import Video from "./pages/Post/Video";
import Gallery from "./pages/Post/Gallery";
import Sidebar from "./pages/Post/Sidebar";
import Blog from "./pages/Blog";
import DynamicRoute from "./pages/Homepage/DynamicRoute";

export default function RouterPath() {
  return (
    <Routes>
      <Route path="/" index element={<Homepage />} />
      <Route path="/route" element={<DynamicRoute />} />

      {/* project paths */}
      <Route path="/project_detail" element={<Details />} />
      <Route path="/project_grid" element={<Grid />} />
      <Route path="/project_masonry" element={<Masonry />} />
      <Route path="/project_carousel" element={<Carousel />} />

      {/* page paths */}
      <Route path="/page_about_us" element={<AboutUs />} />
      <Route path="/page_contact_us" element={<ContactUs />} />

      {/* blog path */}
      <Route path="/post_image" element={<Image />} />
      <Route path="/post_video" element={<Video />} />
      <Route path="/post_gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

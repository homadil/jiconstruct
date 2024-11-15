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
import Admin from "./pages/Admin";
import SignUP from "./pages/Auth/SignUP";
import SignIn from "./pages/Auth/SignIn";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import ForgetPasswordConfirm from "./pages/Auth/ForgetPasswordConfirm";
import ResetEmail from "./pages/Auth/ResetEmail";
import ResetEmailConfirm from "./pages/Auth/ResetEmailConfirm";
import NotFound from "./pages/NotFound";
import UserEdit from "./pages/Auth/UserEdit";

export default function RouterPath() {
  return (
    <Routes>
      <Route path="/" index element={<Homepage />} />
      <Route path="/route" element={<DynamicRoute />} />

      {/* project paths */}
      <Route path="/project_detail" element={<Details />} />
      <Route path="/project" element={<Grid />} />
      <Route path="/project_masonry" element={<Masonry />} />
      <Route path="/project_carousel" element={<Carousel />} />

      {/* page paths */}
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="/contact_us" element={<ContactUs />} />

      {/* blog path */}
      <Route path="/post_image" element={<Image />} />
      <Route path="/blog_detail" element={<Video />} />
      <Route path="/post_gallery" element={<Gallery />} />
      <Route path="/news" element={<Blog />} />

      {/* admin path */}
      <Route path="/admin" element={<Admin />} />

      {/* auth path  */}
      <Route path="/sign_up" element={<SignUP />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/user_edit" element={<UserEdit />} />
      <Route path="/forget_password" element={<ForgetPassword />} />
      <Route
        path="/forget_password_confirm"
        element={<ForgetPasswordConfirm />}
      />
      <Route path="/reset_email" element={<ResetEmail />} />
      <Route path="/reset_email_Confirm" element={<ResetEmailConfirm />} />

      {/* Fallback 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

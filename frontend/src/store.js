import React, { createContext, useEffect, useState } from "react";
import postOne from "./assets/images/dummy/download_4.avif";
import postTwo from "./assets/images/dummy/download_3.jpg";
import postThree from "./assets/images/dummy/download_5.jpg";
import postFour from "./assets/images/dummy/download_6.jpg";
import postFive from "./assets/images/dummy/download_7.jpg";
import postSix from "./assets/images/dummy/download_8.jpg";
import postSeven from "./assets/images/dummy/download_9.webp";
import postEight from "./assets/images/dummy/download_10.jpg";
import postNine from "./assets/images/dummy/download_11.webp";
import user_img from "./assets/images/dummy/team1.jpg";
import apiRequest from "./apiRequest";
// 1. Create the context
export const DataContext = createContext();

// 2. Create the provider component
export const DataProvider = ({ children }) => {
  // 3. State for blogs and projects
  const [blogs, setBlogs] = useState([
    // Add your initial blog data here
    {
      id: 0,
      title: "Blog 0",
      desc: "desc of blog 2",
      date: "2024-08-25",
      comment_count: 5,
      author: {
        id: 22,
        name: "Admin",
      },
      content:
        "<div> <h1> this is the content</h1> <br/> <p>this is the body</p></div>",
      images: [postFive, postFour],
      videos: [],
      quote: "this is the quote of the day",
      show_image: postOne,
      comment: [
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
      ],
      tag: [
        "Trouble ",
        "Programmers",
        "Never",
        "Tell",
        "Doing",
        "Person",
        "Inventors",
        "Tag",
        "Between",
        "Abilities",
        "Fault",
        "Gets",
        "Macho",
      ],
    },
    {
      id: 1,
      title: "Blog 1",
      desc: "desc of blog 1",
      date: "2024-08-25",
      comment_count: 5,
      author: {
        id: 22,
        name: "Admin",
      },
      content:
        "<div> <h1> this is the content</h1> <br/> <p>this is the body</p></div>",
      images: [postOne, postSeven],
      videos: [],
      quote: null,
      show_image: postFive,
      comment: [
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
      ],
      tag: [
        "Trouble ",
        "Programmers",
        "Never",
        "Tell",
        "Doing",
        "Person",
        "Inventors",
        "Tag",
        "Between",
        "Abilities",
        "Fault",
        "Gets",
        "Macho",
      ],
    },
    {
      id: 2,
      title: "Blog 2",
      desc: "desc of blog 2",
      date: "2024-08-25",
      comment_count: 5,
      author: {
        id: 22,
        name: "Admin",
      },
      content:
        "<div> <h1> this is the content</h1> <br/> <p>this is the body</p></div>",
      images: [],
      videos: [],
      quote: "this is the quote of the day",
      show_image: postNine,
      comment: [
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
      ],
      tag: [
        "Trouble ",
        "Programmers",
        "Never",
        "Tell",
        "Doing",
        "Person",
        "Inventors",
        "Tag",
        "Between",
        "Abilities",
        "Fault",
        "Gets",
        "Macho",
      ],
    },
    {
      id: 3,
      title: "Blog 3",
      desc: "desc of blog 2",
      date: "2024-08-25",
      comment_count: 5,
      author: {
        id: 22,
        name: "Admin",
      },
      content:
        "<div> <h1> this is the content</h1> <br/> <p>this is the body</p></div>",
      images: [],
      videos: [],
      quote: "this is the quote of the day",
      show_image: postNine,
      comment: [
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
      ],
      tag: [
        "Trouble ",
        "Programmers",
        "Never",
        "Tell",
        "Doing",
        "Person",
        "Inventors",
        "Tag",
        "Between",
        "Abilities",
        "Fault",
        "Gets",
        "Macho",
      ],
    },

    {
      id: 4,
      title: "Blog 4",
      desc: "desc of blog 2",
      date: "2024-08-25",
      comment_count: 5,
      author: {
        id: 22,
        name: "Admin",
      },
      content:
        "<div> <h1> this is the content</h1> <br/> <p>this is the body</p></div>",
      images: [],
      videos: [],
      quote: "this is the quote of the day",
      show_image: postSix,
      comment: [
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
      ],
      tag: [
        "Trouble ",
        "Programmers",
        "Never",
        "Tell",
        "Doing",
        "Person",
        "Inventors",
        "Tag",
        "Between",
        "Abilities",
        "Fault",
        "Gets",
        "Macho",
      ],
    },
    {
      id: 5,
      title: "Blog 5",
      desc: "desc of blog 2",
      date: "2024-08-25",
      comment_count: 5,
      author: {
        id: 22,
        name: "Admin",
      },
      content:
        "<div> <h1> this is the content</h1> <br/> <p>this is the body</p></div>",
      images: [],
      videos: [],
      quote: "this is the quote of the day",
      show_image: postThree,
      comment: [
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
        {
          id: 23,
          name: "James mick",
          content: " this is a comment by me the creator",
          date: "2019-03-06T07:15:00",
          profile_image: user_img,
          comment: [],
        },
      ],
      tag: [
        "Trouble ",
        "Programmers",
        "Never",
        "Tell",
        "Doing",
        "Person",
        "Inventors",
        "Tag",
        "Between",
        "Abilities",
        "Fault",
        "Gets",
        "Macho",
      ],
    },
  ]);
  const [medias, setMedias] = useState([]);

  const [projects, setProjects] = useState([
    // Add your initial project data here
    { id: 1, title: "Project 1", description: "Description of project 1" },
    { id: 2, title: "Project 2", description: "Description of project 2" },
  ]);

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString); // Convert string to Date object

    const day = date.getDate(); // Get day (e.g., 25)
    const month = date.toLocaleString("default", { month: "short" }); // Get month (e.g., "Aug")
    const year = date.getFullYear(); // Get year (e.g., 2024)

    return { day, month, year };
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString); // Convert the string to a Date object
    return date
      .toLocaleString("en-US", {
        year: "numeric",
        month: "long", // Full month name like "March"
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true, // 12-hour format (AM/PM)
      })
      .replace(",", " at"); // Replace the first comma with ' at'
  };

  const truncateContent = (desc, wordLimit) => {
    const words = desc.split(" "); // Split desc into an array of words
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "..."; // Join the first 'wordLimit' words and add "..."
    }
    return desc; // If the desc is less than the limit, return it as is
  };
  const [homeHeader, setHomeHeader] = useState([]);
  const [homeGrid, setHomeGrid] = useState([]);
  const [newsHeader, setNewsHeader] = useState([]);
  const [aboutUsHeader, setAboutUsHeader] = useState([]);
  const [aboutUsImage, setAboutUsImage] = useState([]);
  const [contactUsHeader, setContactUsHeader] = useState([]);
  const [projectHeader, setProjectHeader] = useState([]);
  const [testimonies, setTestimonies] = useState([]);
  const [teams, setTeams] = useState([]);
  const backend_url = process.env.REACT_APP_BACKEND_URL;
  useEffect(() => {
    apiRequest.get("/medias").then((res) => {
      const medias = res.media;
      // Filter for different media types
      setHomeHeader(medias.filter((item) => item.type === "home_header"));
      setHomeGrid(medias.filter((item) => item.type === "home_grid"));
      setNewsHeader(medias.filter((item) => item.type === "news_header"));
      setAboutUsHeader(
        medias.filter((item) => item.type === "about_us_header")
      );
      setAboutUsImage(medias.filter((item) => item.type === "about_us_image"));
      setContactUsHeader(
        medias.filter((item) => item.type === "contact_us_header")
      );
      setProjectHeader(medias.filter((item) => item.type === "project_header"));
    });

    apiRequest.get("/testimonies").then((res) => {
      setTestimonies(res);
    });

    apiRequest.get("/teams").then((res) => {
      setTeams(res);
    });
  }, []);

  // 4. Provide the data and functions
  return (
    <DataContext.Provider
      value={{
        blogs,
        setBlogs,
        projects,
        setProjects,
        formatDate,
        truncateContent,
        formatDateTime,
        homeHeader,
        homeGrid,
        newsHeader,
        aboutUsHeader,
        contactUsHeader,
        projectHeader,
        aboutUsImage,
        backend_url,
        testimonies,
        setTestimonies,
        teams,
        setTeams,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

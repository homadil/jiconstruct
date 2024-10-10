import React, { createContext, useState } from "react";
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

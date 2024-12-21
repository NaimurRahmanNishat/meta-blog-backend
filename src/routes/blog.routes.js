const express = require("express");
const Blog = require("../models/blog.models");
const { getAllBlogs, getBlogById, postANewBlog, deleteABlogById, updateABlogById } = require("../controllers/blog.controllers");
const router = express.Router();

// get all blog
router.get("/", getAllBlogs);

// get a single blog by id
router.get("/:id", getBlogById);

// post a new blog
router.post("/add-post", postANewBlog);

// delete a blog
router.delete("/:id", deleteABlogById);

// update a blog
router.put("/:id", updateABlogById);

module.exports = router;
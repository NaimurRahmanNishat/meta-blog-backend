const Blog = require("../models/blog.models");

// get all blog
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).send({ message: "Blogs featched successfully", blogs });
  } catch (error) {
    console.error("Error featching all blog", error);
    res.status(500).send({ message: "Error featching all blogs", error });
  }
};

// get a single blog by id
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).send({ message: "Blog not found" });
    }
    res.status(200).send({ message: "Blog is feacthed successfully", blog });
  } catch (error) {
    console.error("Error featching a blog by id", error);
    res.status(500).send({ message: "Error featching a blogs by id", error });
  }
};

// post a new blog
const postANewBlog = async (req, res) => {
  try {
    const newBlog = new Blog({
      ...req.body,
    });

    const blog = await newBlog.save();
    res.status(200).send({ message: "Post created successfully", blog });
  } catch (error) {
    console.error("Error creating a new blog", error);
    res.status(500).send({ message: "Error creating a new blog", error });
  }
};

// delete a blog
const deleteABlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).send({ message: "Blog not found" });
    }
    res
      .status(200)
      .send({ message: "Blog deleted successfully", blog: deletedBlog });
  } catch (error) {
    console.error("Error Deleting a blog by id", error);
    res.status(500).send({ message: "Error Deleting a blog by id", error });
  }
};

// update a blog
const updateABlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBlog) {
      return res.status(404).send({ message: "Blog not found" });
    }
    res
      .status(200)
      .send({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).send({ message: "Error updating a blog by ID", error });
  }
};
module.exports = {
  getAllBlogs,
  getBlogById,
  postANewBlog,
  deleteABlogById,
  updateABlogById,
};

const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        required: true
    },
    author: {
        name: String,
        image: String
    },
    createdAt: {
    type: Date,
    default: Date.now
   }
  
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
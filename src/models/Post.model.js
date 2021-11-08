const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  markup: {
    type: String,
    required: true,
  },
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post

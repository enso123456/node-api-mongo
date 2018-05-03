import { mongo } from "mongoose";

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "category" }]
});

module.exports = mongoose.model("post", PostSchema);

import { Post } from "../models/Post.model.js";

// CREATE
export const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const post = await Post.create({ title, content, author });
    return res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// READ ALL
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username email");
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPost) return res.status(404).json({ error: "Post not found" });
    return res.status(200).json({ message: "Post updated", updatedPost });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) return res.status(404).json({ error: "Post not found" });
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

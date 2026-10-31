import { Router } from "express";
import { createPost, getAllPosts, updatePost, deletePost } from "../controllers/post.controller.js";

const router = Router();

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").put(updatePost).delete(deletePost);

export default router;

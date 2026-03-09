import { Router } from "express";
import {
  createBlogPost,
  getAllBlogPosts,
  getBlogById,
  updateBlogPost,
  deleteBlogPost,
} from "../controllers/blog.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", verifyJWT, createBlogPost);
router.get("/", getAllBlogPosts);
router.get("/:blogId", getBlogById);
router.patch("/:blogId", verifyJWT, updateBlogPost);
router.delete("/:blogId", verifyJWT, deleteBlogPost);

export default router;
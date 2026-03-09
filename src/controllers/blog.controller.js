import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { BlogPost } from "../models/blogPost.model.js";

// create a Blog Post
const createBlogPost = asyncHandler(async (req, res) => {
  const { title, content, tags } = req.body;

  if ([title, content].some((field) => !field || field.trim() === "")) {
    throw new ApiError(400, "Title and content are required");
  }

  const blog = await BlogPost.create({
    author: req.user._id,
    title,
    content,
    tags,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, blog, "Blog created successfully"));
});

// fetching blog with paginatution
const getAllBlogPosts = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, search } = req.query;

  const query = {};

  if (search) {
    query.title = { $regex: search, $options: "i" };
  }

  const blogs = await BlogPost.find(query)
    .populate("author", "_id name")
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await BlogPost.countDocuments(query);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit),
        blogs,
      },
      "Blogs fetched successfully",
    ),
  );
});

// Get Blog By Id
const getBlogById = asyncHandler(async (req, res) => {
  const { blogId } = req.params;

  const blog = await BlogPost.findById(blogId).populate("author", "name email");

  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, blog, "Blog fetched successfully"));
});

// update blog post (only author can update this)
const updateBlogPost = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const { title, content, tags } = req.body;

  const blog = await BlogPost.findById(blogId);

  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }

  if (blog.author.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not allowed to update this blog");
  }

  if (title) blog.title = title;
  if (content) blog.content = content;
  if (tags) blog.tags = tags;

  await blog.save();

  return res
    .status(200)
    .json(new ApiResponse(200, blog, "Blog updated successfully"));
});

// delete blog post (only author can delete this)
const deleteBlogPost = asyncHandler(async (req, res) => {
  const { blogId } = req.params;

  const blog = await BlogPost.findById(blogId);

  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }

  if (blog.author.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not allowed to delete this blog");
  }

  await BlogPost.findByIdAndDelete(blogId);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Blog deleted successfully"));
});

export {
  createBlogPost,
  getAllBlogPosts,
  getBlogById,
  updateBlogPost,
  deleteBlogPost,
};

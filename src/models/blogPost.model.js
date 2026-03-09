import mongoose, { Schema } from "mongoose";

const blogPostSchema = new Schema(
{
  title: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [
    {
      type: String,
      trim: true,
      default: []
    }
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
},
{ timestamps: true }
);

export const BlogPost = mongoose.model("BlogPost", blogPostSchema);


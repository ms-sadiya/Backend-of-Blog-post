import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./src/routes/user.route.js";
import blogRouter from "./src/routes/blog.route.js"

const app = express();

// Global Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/blogs", blogRouter);

export { app };
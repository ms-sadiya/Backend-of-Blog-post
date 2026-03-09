# Blog API

This is a simple REST API for a blog system built using **Node.js, Express.js, and MongoDB**.
It supports user authentication with JWT and allows authenticated users to create, update, and delete their own blog posts.

This project was developed as part of a backend assignment to demonstrate **API design, authentication, authorization, and database modeling**.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token) authentication
* bcrypt for password hashing

---

## Project Structure

```
src/
  controllers/
    user.controller.js
    blog.controller.js

  models/
    user.model.js
    blogPost.model.js

  routes/
    user.route.js
    blog.route.js

  middlewares/
    auth.middleware.js

  utils/
    ApiError.js
    ApiResponse.js
    asyncHandler.js

  db/
    index.js

app.js
server.js
```

---

## Database Design

The project uses two main collections: **User** and **BlogPost**.

### User Collection

```
_id
name
email
password
refreshToken
createdAt
updatedAt
```

### BlogPost Collection

```
_id
title
content
tags
author (User reference)
createdAt
updatedAt
```

### Relationship

```
User (1) --------< BlogPost (many)
```

One **User** can create multiple **Blog Posts**, while each **Blog Post belongs to one User**.

---

## Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/ms-sadiya/Backend-of-Blog-post.git
cd Backend-of-Blog-post
```

---

### 2. Install Dependencies

```
npm install
```

---

### 3. Create `.env` File

Create a `.env` file in the root directory and add the following environment variables:

```
PORT=8000

MONGODB_URI=mongodb://localhost:27017/blogDB

ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=15m

REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=7d

CORS_ORIGIN=http://localhost:5173

NODE_ENV=development
```

You can also refer to `.env.example` for reference.

---

### 4. Run the Server

```
npm run dev
```

Server will run at:

```
http://localhost:8000
```

---

## API Routes

### Authentication Routes

```
POST   /api/v1/user/register
POST   /api/v1/user/login
POST   /api/v1/user/logout
POST   /api/v1/user/refresh-token
GET    /api/v1/user/current-user
```

---

### Blog Routes

```
POST   /api/v1/blogs
GET    /api/v1/blogs
GET    /api/v1/blogs/:blogId
PATCH  /api/v1/blogs/:blogId
DELETE /api/v1/blogs/:blogId
```

---

## Pagination Example

```
GET /api/v1/blogs?page=1&limit=10
```

---

## Search Example

```
GET /api/v1/blogs?search=node
```

---

## Authentication

Protected routes require a **JWT access token**.

Example header:

```
Authorization: Bearer <access_token>
```

---

## Testing

The API can be tested using:

* Postman
* Thunder Client
* Insomnia

A **Postman collection and environment file** are included in the repository for easier testing.

---

## Author

Developed by **Ansari Sadiya**

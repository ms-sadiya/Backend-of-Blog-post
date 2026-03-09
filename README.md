# Blog API

This is a simple REST API for a blog system built with **Node.js, Express, and MongoDB**.
It supports user authentication with JWT and allows authenticated users to create, update, and delete their own blog posts.

The project was created as part of a backend assignment to demonstrate API design, authentication, and database modeling.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT authentication
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

The project has two main collections: **User** and **BlogPost**.

```
User
------
_id
name
email
password
refreshToken
createdAt
updatedAt
```

```
BlogPost
---------
_id
title
content
tags
author (User reference)
createdAt
updatedAt
```

Relationship:

```
User (1) ------< BlogPost (many)
```

One user can create multiple blog posts.

---

## Setup Instructions

Clone the repository:

```
git https://github.com/ms-sadiya/Backend-of-Blog-post.git
cd Backend-of-Blog-post
```

Install dependencies:

```
npm install
```

Create a `.env` file:

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

Run the server:

```
npm run dev
```

Server runs at:

```
http://localhost:8000
```

---

## API Routes

### Auth Routes

```
POST   /api/v1/user/register
POST   /api/v1/user/login
POST   /api/v1/user/logout
POST   /api/v1/user/refresh-token
GET    /api/v1/user/current-user
```

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

Protected routes require an access token:

```
Authorization: Bearer <token>
```

---

## Testing

The API can be tested using Postman or any API client.

# Blog API

A RESTful Blog API built with **Node.js, Express.js, and MongoDB**.
The application includes **authentication, authorization, blog CRUD operations, pagination, and search functionality**.

---

# Features

* User Registration
* User Login with JWT Authentication
* Access Token & Refresh Token
* Create Blog Post
* Get All Blog Posts with Pagination
* Get Single Blog Post by ID
* Update Own Blog Post
* Delete Own Blog Post
* Search Blog Posts by Title
* Authentication Middleware
* Proper Error Handling
* Clean Folder Structure

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt (Password Hashing)
* cookie-parser
* cors

---

# Project Structure

```
src
│
├── controllers
│   ├── user.controller.js
│   └── blog.controller.js
│
├── models
│   ├── user.model.js
│   └── blogPost.model.js
│
├── routes
│   ├── user.route.js
│   └── blog.route.js
│
├── middlewares
│   └── auth.middleware.js
│
├── utils
│   ├── ApiError.js
│   ├── ApiResponse.js
│   └── asyncHandler.js
│
├── db
│   └── index.js
│
app.js
server.js
```

---
# ER Diagram

The database contains two main entities: **User** and **BlogPost**.

```
+-------------------+
|       User        |
+-------------------+
| _id               |
| name              |
| email             |
| password          |
| refreshToken      |
| createdAt         |
| updatedAt         |
+-------------------+
          |
          | 1
          |
          | creates
          |
          v
+-------------------+
|     BlogPost      |
+-------------------+
| _id               |
| title             |
| content           |
| tags              |
| author (User ID)  |
| createdAt         |
| updatedAt         |
+-------------------+
```

Relationship:

```
User 1 --------< many BlogPosts
```

One **User** can create many **Blog Posts**, and each **Blog Post belongs to one User**.

---

# Installation

### 1 Clone Repository

```
git clone https://github.com/ms-sadiya/Backend-of-Blog-post.git
cd Backend-of-Blog-post
```

---

### 2 Install Dependencies

```
npm install
```

---

### 3 Create `.env` file

```
PORT=8000

MONGODB_URI=mongodbconnectionstring

ACCESS_TOKEN_SECRET=youraccesstokensecret
ACCESS_TOKEN_EXPIRY=15m

REFRESH_TOKEN_SECRET=yourrefreshtokensecret
REFRESH_TOKEN_EXPIRY=7d

CORS_ORIGIN=http://localhost:5173

NODE_ENV=development
```

---

### 4 Run the Server

```
npm run dev
```

Server will run at:

```
http://localhost:8000
```

---

# API Endpoints

## Authentication Routes

| Method | Endpoint                     | Description          |
| ------ | ---------------------------- | -------------------- |
| POST   | `/api/v1/user/register`      | Register user        |
| POST   | `/api/v1/user/login`         | Login user           |
| POST   | `/api/v1/user/logout`        | Logout user          |
| POST   | `/api/v1/user/refresh-token` | Refresh access token |
| GET    | `/api/v1/user/current-user`  | Get logged-in user   |

---

## Blog Routes

| Method | Endpoint                | Description      |
| ------ | ----------------------- | ---------------- |
| POST   | `/api/v1/blogs`         | Create blog post |
| GET    | `/api/v1/blogs`         | Get all blogs    |
| GET    | `/api/v1/blogs/:blogId` | Get blog by ID   |
| PATCH  | `/api/v1/blogs/:blogId` | Update blog      |
| DELETE | `/api/v1/blogs/:blogId` | Delete blog      |

---

# Pagination Example

```
GET /api/v1/blogs?page=1&limit=10
```

---

# Search Example

```
GET /api/v1/blogs?search=node
```

---

# Authentication

Protected routes require a **JWT access token**.

Example request header:

```
Authorization: Bearer <access_token>
```

---

# Example Request

### Create Blog

POST `/api/v1/blogs`

```
{
  "title": "",
  "content": "",
  "tags": [""]
}
```

---

# Example Response

```
{
  "statusCode": 201,
  "data": {
    "title": "",
    "content": ""
  },
  "message": "Blog created successfully"
}
```

---

# Testing

You can test the API using:

* Postman
* Thunder Client
* Insomnia

---

# Author

Developed by **Sadiya**

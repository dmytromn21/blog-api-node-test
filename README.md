# Blog API

A RESTful API for a simple blog application built with Node.js, Express.js, and MongoDB. This API supports CRUD operations for blog posts and comments. For Testing.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
  - [Swagger Documentation](#swagger-documentation)
- [Endpoints](#endpoints)
- [Contact](#contact)

## Installation

### Prerequisites

1. **Node.js and npm**: Ensure that Node.js and npm are installed. Download and install from [Node.js official website](https://nodejs.org/).

2. **MongoDB**: Ensure MongoDB is installed and running. Download from [MongoDB official website](https://www.mongodb.com/try/download/community) and follow the [installation instructions](https://docs.mongodb.com/manual/installation/).

### Setup

1. **Clone the Project Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the required npm packages:

   ```bash
   npm install
   ```

3. **Start MongoDB**

   Ensure MongoDB is running on the default port (`27017`). You can start MongoDB with:

   ```bash
   mongod
   ```

## Running the Project

1. **Start the Server**

   Start the application using the development script:

   ```bash
   npm run dev
   ```

   Alternatively, for production mode:

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:3000`.

## API Documentation

### Swagger Documentation

Swagger provides interactive API documentation for exploring and testing the API.

1. **Set Up Swagger**

   Swagger is set up in the project. After starting the server, navigate to the Swagger documentation endpoint.

2. **Access Swagger Documentation**

   Visit `http://localhost:3000/api-docs` in your browser to view and interact with the API documentation.

3. **Auth Token**
   Sample auth token is `f9a939d80980a8d09bbf0090` .
   You need to authorize in the swagger UI to test the APIs.

## Endpoints

### Posts

- **GET** `/posts` - Retrieve all posts
- **GET** `/posts/:id` - Retrieve a single post by ID
- **POST** `/posts` - Create a new post
- **PUT** `/posts/:id` - Update a post by ID
- **DELETE** `/posts/:id` - Delete a post by ID

### Comments

- **GET** `/posts/:postId/comments` - Retrieve all comments for a specific post
- **POST** `/posts/:postId/comments` - Add a new comment to a specific post
- **DELETE** `/posts/:postId/comments/:commentId` - Delete a comment by ID for a specific post

## Contact

For questions or feedback, please contact [Dmytro Melnyk](dmytromelnyk21@gmail.com).

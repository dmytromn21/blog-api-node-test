const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');
const authMiddleware = require('./middleware/auth');
const loggerMiddleware = require('./middleware/logger');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Blog API',
        version: '1.0.0',
        description: 'A RESTful API for managing blog posts and comments',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server',
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT', // optional, specify if you're using JWT
            },
        },
        schemas: {
            Post: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string',
                        example: 'My First Post',
                    },
                    content: {
                        type: 'string',
                        example: 'This is the content of the post.',
                    },
                    author: {
                        type: 'string',
                        example: 'John Doe',
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                        example: '2023-01-01T00:00:00Z',
                    },
                },
                required: ['title', 'content', 'author'],
            },
            Comment: {
                type: 'object',
                properties: {
                    postId: {
                        type: 'string',
                        example: '607d1f77bcf86cd7994f6c0e',
                    },
                    author: {
                        type: 'string',
                        example: 'Jane Doe',
                    },
                    content: {
                        type: 'string',
                        example: 'This is a comment.',
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                        example: '2023-01-01T00:00:00Z',
                    },
                },
                required: ['postId', 'author', 'content'],
            },
        },
    },
    security: [
        {
            bearerAuth: [],
        },
    ],
};

// Options for the swagger docs
const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Path to the API docs
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

// Initialize Express app
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(loggerMiddleware);
app.use(authMiddleware);

// Routes
app.use('/posts', postRoutes);
app.use('/posts', commentRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

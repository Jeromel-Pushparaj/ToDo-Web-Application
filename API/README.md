# Task Management API

## Overview
The Task Management API provides a robust system to manage tasks with features like categorization, prioritization, and CRUD operations. This API uses MongoDB for persistent storage and is built with Node.js, Express, and Mongoose.

---

## Features
- **Persistent Storage**: Tasks are saved in MongoDB.
- **Categories**: Assign a category to each task (default: "General").
- **Prioritization**: Assign a priority level (`Low`, `Medium`, `High`).
- **CRUD Operations**:
  - **Create Task**: Add a new task.
  - **Read Tasks**: Fetch all tasks from the database.
  - **Update Task**: Modify task properties.
  - **Delete Task**: Remove tasks.

---

## Prerequisites

1. Node.js (v14 or higher)
2. MongoDB Database

---

## Setup

### Clone the Repository
```bash
git clone <repository-url>
cd project
```

### Install Dependencies
```bash
npm install
```

### Configure Environment Variables
Create a `.env` file in the root directory with the following:
```plaintext
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/tasksDB
PORT=8080
```

Replace `<username>` and `<password>` with your MongoDB credentials.

### Start the Server
```bash
npm start
```

By default, the server runs on `http://localhost:8080`.

---

## API Endpoints

### Base URL
```
http://localhost:8080/api/tasks
```

### 1. **Get All Tasks**
#### Request
```http
GET /api/tasks
```
#### Response
- **200 OK**: Returns a list of all tasks.
```json
[
  {
    "_id": "64b8f5e5c8a4b7e1a0e3d123",
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs",
    "category": "Shopping",
    "priority": "Medium",
    "completed": false,
    "createdAt": "2024-01-10T08:00:00.000Z",
    "updatedAt": "2024-01-10T08:00:00.000Z"
  }
]
```

### 2. **Create a New Task**
#### Request
```http
POST /api/tasks/create
```
#### Body
```json
{
  "title": "Task Title",
  "description": "Task description",
  "category": "Work",
  "priority": "High"
}
```
#### Response
- **201 Created**: Returns the created task.
```json
{
  "message": "Task created successfully",
  "task": {
    "_id": "64b8f5e5c8a4b7e1a0e3d123",
    "title": "Task Title",
    "description": "Task description",
    "category": "Work",
    "priority": "High",
    "completed": false,
    "createdAt": "2024-01-10T08:00:00.000Z",
    "updatedAt": "2024-01-10T08:00:00.000Z"
  }
}
```

### 3. **Update a Task**
#### Request
```http
PUT /api/tasks/update/:id
```
#### Body
Provide any updatable fields (e.g., title, description, category, priority, completed).
```json
{
  "completed": true
}
```
#### Response
- **200 OK**: Returns the updated task.
```json
{
  "message": "Task updated successfully",
  "task": {
    "_id": "64b8f5e5c8a4b7e1a0e3d123",
    "title": "Task Title",
    "description": "Task description",
    "category": "Work",
    "priority": "High",
    "completed": true,
    "createdAt": "2024-01-10T08:00:00.000Z",
    "updatedAt": "2024-01-11T09:00:00.000Z"
  }
}
```

### 4. **Delete a Task**
#### Request
```http
DELETE /api/tasks/delete/:id
```
#### Response
- **200 OK**: Returns a success message.
```json
{
  "message": "Task deleted successfully"
}
```

---

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of requests:
- **200 OK**: Successful request.
- **201 Created**: Resource successfully created.
- **400 Bad Request**: Invalid request body or parameters.
- **404 Not Found**: Task not found.
- **500 Internal Server Error**: Server-side error.

Example error response:
```json
{
  "message": "Error creating task",
  "error": "ValidationError: Title is required"
}
```

---

## License
This project is licensed under the MIT License.

---

## Further Development
You can extend this API with additional features like:
1. User Authentication and Authorization.
2. Pagination and Search for tasks.
3. Task Reminders and Notifications.


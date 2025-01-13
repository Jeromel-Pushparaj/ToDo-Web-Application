﻿# ToDo-Web-Application

This simple server-side application is built with **Express.js** and serves as the backend for a basic ToDo app. Currently, the server does not use a database, so all task-related data is stored in memory and will reset once the server restarts. Despite its simplicity, this app demonstrates how to manage tasks using RESTful APIs.

![Screen Recording 2025-01-11 000955](https://github.com/user-attachments/assets/3c38430b-9624-4773-aa23-8cd72ef9cc4d)


---



### Prerequisites



Make sure you have **Node.js** installed. You can download it from [Node.js Official Website](https://nodejs.org).



---



### Getting Started



1. Clone the repository or copy the code into a file named `server.js`.

2. Run `npm install express cors` to install the required dependencies.

3. Start the server with the command:



   ```bash

   node server.js

   ```



4. By default, the server will run on `http://localhost:8080`.



---



### Available Endpoints



Here’s a breakdown of the endpoints and what they do:



#### 1. **GET `/`**

   - **Description**: A friendly "Hello World" response to confirm the server is running.

   - **Response**: 

     ```html

     <h1>Hello World!</h1>

     ```



#### 2. **GET `/getAllTask`**

   - **Description**: Retrieves all tasks currently stored in the server memory.

   - **Response**: An array of task objects. Example:

     ```json

     [

       {

         "text": "Buy groceries",

         "completed": false

       },

       {

         "text": "Do laundry",

         "completed": true

       }

     ]

     ```

   - **Note**: Tasks are stored in memory, so if the server is restarted, the data will be lost.



#### 3. **POST `/createTask`**

   - **Description**: Adds a new task to the list.

   - **Request Body**:

     ```json

     {

       "text": "Your task description",

       "completed": false

     }

     ```

   - **Response**: A success message:

     ```

     Task created successful

     ```



#### 4. **POST `/updateAllTask`**

   - **Description**: Replaces the current task list with a new one.

   - **Request Body**:

     ```json

     [

       {

         "text": "Updated task 1",

         "completed": true

       },

       {

         "text": "Updated task 2",

         "completed": false

       }

     ]

     ```

   - **Response**: 

     ```

     Task Successfully

     ```



#### 5. **POST `/users`**

   - **Description**: A sample endpoint to demonstrate handling user data. It takes a `name` and `pass` in the request body and responds with the same.

   - **Request Body**:

     ```json

     {

       "name": "Jeromel",

       "pass": "securepassword"

     }

     ```

   - **Response**: 

     ```

     name: Jeromel pass: securepassword

     ```



---



### Features and Notes



- **In-Memory Storage**: Tasks are stored in a local array (`Tasks`). This means:

  - If the server restarts, all tasks are cleared.

  - It’s ideal for testing or prototyping, but not for production use.

- **Cross-Origin Support**: The server uses `cors()` to allow requests from any origin, making it easy to connect with frontend applications.

- **JSON Parsing**: With `express.json()` and `express.urlencoded()`, the server can handle JSON and URL-encoded payloads.



---



### Future Improvements



This server is a great starting point, but here are some ideas for extending its functionality:

1. **Database Integration**: Connect to a database like MongoDB or MySQL to persist task data.

2. **Authentication**: Secure endpoints with user authentication.

3. **Validation**: Add input validation to ensure data integrity.

4. **Error Handling**: Provide better error responses for edge cases.



---



### How to Use



1. Start the server.

2. Use tools like **Postman** or a frontend application to interact with the endpoints.

3. Experiment, learn, and enjoy building your ToDo app!



If you encounter any issues or have suggestions for improvement, feel free to reach out. 🚀

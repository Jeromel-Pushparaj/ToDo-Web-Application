# React Task Manager with Tailwind CSS

## Overview
This project is a React-based task management application using Tailwind CSS for styling and Axios for API interactions. The application allows users to perform CRUD operations on tasks categorized into `Not Started`, `In Progress`, and `Completed`. The UI features a minimalistic black-and-white theme with curved boxes and buttons.

---

## Features
- **Task Categories**: Organize tasks into `Not Started`, `In Progress`, and `Completed`.
- **CRUD Operations**: Create, read, update, and delete tasks.
- **Minimalist UI**: Designed with Tailwind CSS for a clean, modern look.
- **API Integration**: Communicates with a backend API for task management.

---

## Prerequisites
- Node.js (v14 or higher)
- A running instance of the Task Management API.

---

## Installation and Setup

### 1. Initialize React Application
Create a new React app:
```bash
npx create-react-app task-manager
cd task-manager
```

### 2. Install Tailwind CSS
Set up Tailwind CSS for the project:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Update the `tailwind.config.js` file:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind CSS imports to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Install Axios
Install Axios for API calls:
```bash
npm install axios
```

---

## Folder Structure
```
src/
├── components/
│   ├── TaskForm.js
│   ├── TaskList.js
├── App.js
├── index.css
```

---

## How to Run
1. Start the React development server:
   ```bash
   npm start
   ```
2. Ensure the Task Management API is running at `http://localhost:8080`.
3. Open the app in your browser at `http://localhost:3000`.

---

## How to Use

### 1. Adding a Task
- Fill in the `Title`, `Description`, and `Category` fields in the form.
- Click the **Add Task** button to create a new task.

### 2. Viewing Tasks
- Tasks are grouped into categories: `Not Started`, `In Progress`, and `Completed`.

### 3. Updating a Task
- Use category buttons (e.g., **In Progress**) to move a task to a different category.

### 4. Deleting a Task
- Click the **Delete** button to remove a task.

---

## Styling Highlights
- **Minimalistic Theme**: Black-and-white color scheme.
- **Curved Elements**: Rounded corners using `rounded-lg`.
- **Consistent Layout**: Spacing and alignment achieved with Tailwind utilities.

---

## Dependencies
- **React**: Frontend library for building the application.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for interacting with the backend API.

---

## Further Development
Consider adding:
- User authentication for personalized task management.
- Drag-and-drop functionality for category management.
- Dark mode toggle for improved user experience.


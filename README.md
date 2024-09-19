# Course-Report
This project is a **React + PHP** web application that displays a list of course enrolments fetched from a **MySQL database**. The frontend is built using **React** and styled with **Tailwind CSS**, while the backend uses **PHP** to serve the data. The application includes the ability to **search** through enrolments, **sort** the table by different columns, and interact with a modern user interface.

## Features

- **Search functionality**: Filter enrolments by first name, last name, course name, or status.
- **Sorting functionality**: Sort the enrolment data in ascending or descending order by any column (first name, last name, course, or status).
- **Responsive design**: The layout is responsive and adapts to different screen sizes.
- **Built with React and Tailwind CSS** for a modern and fast front-end experience.
- **Backend in PHP**: Fetches data from a MySQL database and serves it via a RESTful API.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: PHP, MySQL
- **HTTP Client**: Axios (for making API requests)
- **Vite**: Fast development server for React

---

## Working Examples
![0185df29f5553bc2d431c6b0c9d530b](https://github.com/user-attachments/assets/af12f2fb-689d-4022-a54c-4279291e6a7b)
**Search**
![7c156e3b9f504bd74ae4cc81b484d53](https://github.com/user-attachments/assets/1646b920-9e91-4e14-afd5-f75905adb0bf)
![80f0a12bf145f882d815329440b35be](https://github.com/user-attachments/assets/3426376b-b272-4868-9f0d-b1224a36eedd)
**Sort**
![e970b50c75141eab56b598e8d125029](https://github.com/user-attachments/assets/4af153ce-044d-41c2-a3c4-d7f62d2d1e2c)
![f3d9aa4c1784c6b7910354084374e8d](https://github.com/user-attachments/assets/b96dfd17-ba90-4c4e-acc5-82bdee744856)


## Setup Instructions

### Prerequisites

- **Node.js** (v14 or later)
- **PHP** (v7 or later)
- **MySQL** (for the database)
- **Composer** (optional for PHP package management, but not required here)
- **Git** (installed and configured)

---

### 1. Clone the Repository

1. Open your terminal and navigate to the directory where you'd like to clone the project.
2. Run the following Git command to clone the repository from GitHub:

    ```bash
    git clone https://github.com/your-username/Course-Report.git
    cd Course-Report
    ```

### 2. Set Up the Backend (PHP + MySQL)

1. **Install XAMPP or another PHP/MySQL server**.
2. **Create a MySQL database**:
   - Create a database called `course_report` in phpMyAdmin (or any other MySQL client).
3. **Create the database tables**:
   Use MindAtlas_CourseReport_MySQL.sql to create the required tables and add sample data

### 3. Running the PHP Server

Make sure to start the PHP development server on port 8000, as this is the port the React frontend is expecting to fetch data from.
1. Navigate to the directory where your PHP file (enrolments.php) is located.
2. Run the following command to start the PHP server:

   ```bash
   php -S localhost:8000
   ```
3. Ensure that the server is running at http://localhost:8000 and that your PHP script (enrolments.php) is properly connecting to the MySQL database.

### 4. Set Up the Frontend (React)

1. **Install the dependencies**:

    ```bash
    npm install
    ```

2. **Start the development server**:

    ```bash
    npm run dev
    ```

    This will start the Vite development server and open the app in your browser at `http://localhost:5173`.

---

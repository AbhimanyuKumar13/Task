# Task Management Application

--> What the project is ? 

This is a simple full-stack Task Management application built as part of a Full Stack Developer screening assignment.  
The project demonstrates core frontend and backend skills along with clean UI, proper authentication, and basic product-level thinking.

The application allows users to manage their daily tasks in a simple and distraction-free way.

---

--> Features

- User registration and login
- Secure authentication using JWT
- Create tasks with optional descriptions
- Edit and delete tasks
- Update task status (Pending, In Progress, Done)
- Shared navigation for all users
- Landing page for logged-out users and dashboard for logged-in users

---

--> Tech Stack

1. Frontend
- React
- React Router
- CSS Modules
- Axios

2. Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- bcrypt for password hashing
 

--> Project Structure

project-root/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── api/
│   │   └── utils/
│   ├── .gitignore
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── .gitignore
│   └── server.js
│
└── README.md


--> Setup Instructions

1. Clone the repository
git clone <repository-url>
cd project-root

2. Backend Setup
cd backend
npm install


Create a .env file in the backend directory:

PORT=5000
MONGO_URI=your_database_connection_string
JWT_SECRET=your_secret_key


Start the backend server:

npm run dev


Backend will run on:

http://localhost:5000

3. Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173 (or port 3000 depending on setup)
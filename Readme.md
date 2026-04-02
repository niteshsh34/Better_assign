# 🚀 Task Manager Dashboard (Flask + React + MySQL)

A full-stack web application that allows users to manage daily tasks efficiently. Built using a modern tech stack with a clean API architecture and responsive frontend.

---

# 📌 Tech Stack

🔹 **Frontend** → React (Vite)
🔹 **Backend** → Flask (Python REST API)
🔹 **Database** → MySQL
🔹 **Communication** → Axios (HTTP requests)

---

# ✨ Features

✅ User Registration & Login
✅ Create Tasks
✅ View Tasks
✅ Mark Tasks as Completed
✅ Delete Tasks
✅ Clean UI with real-time updates

---

# 📁 Project Structure

```
project-root/
│
├── backend/
│   ├── app.py
│   ├── db.py
│   ├── routes/
│   │   ├── auth.py
│   │   ├── tasks.py
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── api.js
│   │   ├── styles.css
```

---

# ⚙️ Setup Instructions

## 🔹 1. Backend Setup

```
cd backend
pip install flask flask-cors mysql-connector-python
python app.py
```

Backend runs on:
👉 http://localhost:5000

---

## 🔹 2. Database Setup (MySQL)

Run these queries:

```sql
CREATE DATABASE taskdb;

USE taskdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255),
    completed BOOLEAN DEFAULT FALSE
);
```

---

## 🔹 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:
👉 http://localhost:5173

---

# 🔗 API Endpoints

### 🔐 Auth Routes

* `POST /register` → Register user
* `POST /login` → Login user

### 📋 Task Routes

* `GET /tasks/<user_id>` → Get all tasks
* `POST /tasks` → Add task
* `PUT /tasks/<id>` → Toggle complete
* `DELETE /tasks/<id>` → Delete task

---

# 🎯 10–15 Minute Walkthrough (Explain Like a Pro)

## 🟢 1. Project Overview (1–2 min)

"This is a full-stack task manager application where users can register, log in, and manage their daily tasks. The backend is built with Flask providing REST APIs, and the frontend is developed using React with Vite."

---

## 🟢 2. Architecture (2–3 min)

* Backend exposes REST APIs
* React frontend consumes APIs via Axios
* MySQL stores users and tasks
* CORS enabled for cross-origin communication

Flow:

```
User → React UI → Axios → Flask API → MySQL
```

---

## 🟢 3. Backend Explanation (3–4 min)

* `app.py` → Entry point
* `auth.py` → Handles login/register
* `tasks.py` → CRUD operations for tasks
* `db.py` → MySQL connection

Key points:

* Modular routing using Flask Blueprints
* JSON-based API responses
* Simple relational schema

---

## 🟢 4. Frontend Explanation (3–4 min)

* `App.jsx` → Controls authentication state
* `Login.jsx` → Handles login/register
* `Dashboard.jsx` → Task management UI

Key concepts:

* React Hooks (`useState`, `useEffect`)
* Axios for API calls
* Conditional rendering (login vs dashboard)

---

## 🟢 5. Demo Flow (2–3 min)

1. User registers
2. Logs in
3. Dashboard loads tasks
4. Adds new task
5. Marks task complete ✔
6. Deletes task ❌

---

## 🟢 6. Challenges Faced

* MySQL connection issues
* CORS handling
* API integration debugging

---

## 🟢 7. Future Improvements 🚀

🔒 JWT Authentication
🔐 Password Hashing
🎨 Better UI (Tailwind CSS)
☁️ Deployment (Render / Netlify)
📊 Task filtering & search

---

# 🧠 Key Learnings

✔ Full-stack integration
✔ REST API design
✔ Database schema design
✔ React state management
✔ Debugging real-world issues

---

# 💡 Conclusion

This project demonstrates end-to-end development of a scalable web application using modern tools and clean architecture. It highlights practical understanding of backend APIs, frontend interaction, and database management.

---

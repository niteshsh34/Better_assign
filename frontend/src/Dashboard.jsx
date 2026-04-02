import { useEffect, useState } from "react";
import API from "./api";

function Dashboard({ user, setUser }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get(`/tasks/${user.id}`);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title) return;
    await API.post("/tasks", {
      user_id: user.id,
      title,
    });
    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await API.put(`/tasks/${id}`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="card">
      <h2>Welcome, {user.username}</h2>

      <button onClick={() => setUser(null)} className="logout">
        Logout
      </button>

      <div className="task-input">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div>
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <span
              className={task.completed ? "completed" : ""}
            >
              {task.title}
            </span>

            <div>
              <button onClick={() => toggleTask(task.id)}>✔</button>
              <button onClick={() => deleteTask(task.id)}>❌</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
import { useEffect, useState } from "react";
import API from "../api/api";
import TaskCard from "../components/TaskCard";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;

    await API.post("/tasks", {
      title,
      description
    });

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.heading}>Your Tasks</h2>
        <p className={styles.subheading}>
          Create, track, and complete your work
        </p>
      </div>

      {/* Task Form */}
      <div className={styles.form}>
        <input
          className={styles.input}
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className={styles.textarea}
          placeholder="Task description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className={styles.addBtn} onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className={styles.taskList}>
        {tasks.length === 0 ? (
          <p className={styles.empty}>
            No tasks yet. Add your first one.
          </p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task._id} task={task} refresh={fetchTasks} />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;

import { useState } from "react";
import API from "../api/api";
import styles from "./TaskCard.module.css";

const TaskCard = ({ task, refresh }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");

  const updateStatus = async (e) => {
    await API.patch(`/tasks/${task._id}/status`, {
      status: e.target.value
    });
    refresh();
  };

  const deleteTask = async () => {
    await API.delete(`/tasks/${task._id}`);
    refresh();
  };

  const saveChanges = async () => {
    await API.put(`/tasks/${task._id}`, {
      title,
      description
    });
    setIsEditing(false);
    refresh();
  };

  return (
    <div className={styles.card}>
      {isEditing ? (
        <>
          <input
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
          />

          <textarea
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description"
          />

          <div className={styles.actions}>
            <button className={`${styles.btn} ${styles.primary}`} onClick={saveChanges}>
              Save
            </button>
            <button
              className={`${styles.btn} ${styles.secondary}`}
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h4 className={styles.title}>{task.title}</h4>

          {task.description && (
            <p className={styles.description}>{task.description}</p>
          )}

          <select
            className={styles.select}
            value={task.status}
            onChange={updateStatus}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>

          <div className={styles.actions}>
            <button
              className={`${styles.btn} ${styles.secondary}`}
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className={`${styles.btn} ${styles.danger}`}
              onClick={deleteTask}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;

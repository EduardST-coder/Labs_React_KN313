import { useState } from "react"
export default function TodoItem({ task, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(false)
  return (
    <li className={`item ${isCompleted ? "done" : ""}`}>
      <label className="left">
        <input type="checkbox" checked={isCompleted}
               onChange={() => setIsCompleted(v => !v)} />
        <span>{task.title}</span>
      </label>
      <div className="actions">
        <button className="del" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </li>
  )
}

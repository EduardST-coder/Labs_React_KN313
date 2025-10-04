import React from "react"
import { Trash2 } from "lucide-react"

export function TodoItem({ todo, onToggle, onDelete }) {
  // колись текст відсутній — покажемо усі можливі поля
  const text = todo?.title ?? todo?.todo ?? todo?.text ?? String(todo?.id ?? "")
  return (
    <div style={{ padding: 10, border: "1px solid #eee", borderRadius: 8 }}>
      <label style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <input type="checkbox" checked={!!todo?.completed} onChange={() => onToggle(todo?.id)} />
        <span>{text}</span>
      </label>
      <button onClick={() => onDelete(todo?.id)} style={{ marginLeft: 12 }}>
        <Trash2 size={14} />
      </button>
    </div>
  )
}

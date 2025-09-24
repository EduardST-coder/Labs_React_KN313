import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import TodoItem from "./TodoItem"

const initial = [
  { id: 1, title: "Example task 1" },
  { id: 2, title: "Math homework" },
  { id: 3, title: "Buy tomatoes" },
]

export default function TodoList() {
  const [todos, setTodos] = useState(initial)
  const addTodo = (title) => {
    const t = title.trim(); if (!t) return
    setTodos(prev => [...prev, { id: Date.now(), title: t }])
  }
  const deleteTodo = (id) => setTodos(prev => prev.filter(t => t.id !== id))
  return (
    <div className="wrap">
      <h1>All your tasks</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul className="list">
        {todos.map(t => <TodoItem key={t.id} task={t} onDelete={deleteTodo} />)}
      </ul>
    </div>
  )
}

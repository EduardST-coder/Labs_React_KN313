import { useState } from "react"
import { useTodos } from "../hooks/use-todos"
import { TodoItem } from "./todo-item"
import { Loader2, Plus, AlertCircle } from "lucide-react"

export function TodoList() {
  const { todos, isLoading, error, addTodo, toggleTodo, deleteTodo } = useTodos()
  const [newTodoText, setNewTodoText] = useState("")
  const [isAdding, setIsAdding] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newTodoText.trim()) return

    setIsAdding(true)
    await addTodo(newTodoText)
    setNewTodoText("")
    setIsAdding(false)
  }

  const completedCount = todos.filter((t) => t.completed).length
  const activeCount = todos.length - completedCount

  if (isLoading) {
    return (
      <div>
        <Loader2 size={32} />
        <span>Loading todos...</span>
      </div>
    )
  }

  return (
    <div>
      <h1>Todo List</h1>
      <p>Manage your tasks with DummyJSON API</p>

      {error && (
        <div>
          <AlertCircle size={20} />
          <div>
            <p>Error</p>
            <p>{error}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new todo..."
          disabled={isAdding}
        />
        <button type="submit" disabled={isAdding || !newTodoText.trim()}>
          {isAdding ? <Loader2 size={18} /> : <Plus size={18} />}
          Add
        </button>
      </form>

      <div>
        <div>Total: {todos.length}</div>
        <div>Active: {activeCount}</div>
        <div>Completed: {completedCount}</div>
      </div>

      <div>
        {todos.length === 0 ? (
          <div>No todos yet. Add one above!</div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  )
}

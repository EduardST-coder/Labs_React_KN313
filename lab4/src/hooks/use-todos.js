"use client"

import { useState, useEffect } from "react"

const API_URL = "https://dummyjson.com/todos"

export function useTodos() {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch(`${API_URL}?limit=10`)
      if (!response.ok) throw new Error("Failed to fetch todos")
      const data = await response.json()
      setTodos(data.todos)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const addTodo = async (text) => {
    try {
      setError(null)
      const response = await fetch(`${API_URL}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: text,
          completed: false,
          userId: 1,
        }),
      })
      if (!response.ok) throw new Error("Failed to add todo")
      const newTodo = await response.json()
      setTodos((prev) => [newTodo, ...prev])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add todo")
    }
  }

  const toggleTodo = async (id) => {
    const todo = todos.find((t) => t.id === id)
    if (!todo) return

    // Optimistic update - update UI immediately
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
    setError(null)

    // Try to sync with API, but don't revert or show error if it fails
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          completed: !todo.completed,
        }),
      })
      if (!response.ok) {
        // Log error for debugging but don't show to user
        console.log("[v0] Failed to sync todo toggle with API:", id)
      }
    } catch (err) {
      // Log error for debugging but don't show to user
      console.log("[v0] Error syncing todo toggle:", err)
    }
  }

  const deleteTodo = async (id) => {
    try {
      setError(null)
      await fetch(`${API_URL}/${id}`, { method: "DELETE" }).catch(() => {})
      setTodos((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete todo")
    }
  }

  return {
    todos,
    isLoading,
    error,
    addTodo,
    toggleTodo,
    deleteTodo,
  }
}

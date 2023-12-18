import { TodoType } from "../types"
import { createContext, useContext, useEffect, useState } from "react"

interface ContextType {
  todos: TodoType[]
  addTodo: (todo: TodoType) => void
  updateTodo: (id: TodoType["id"], status: TodoType["status"]) => void
  removeTodo: (id: TodoType["id"]) => void
}

const getInitialState = () => {
  const todos = localStorage.getItem("todos")
  return todos ? JSON.parse(todos) : []
}

export const AppContext = createContext<ContextType | null>(null)

export const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[] | []>(getInitialState())

  const pending = todos.filter(todo => todo.status === "pending")
  const paused = todos.filter(todo => todo.status === "paused")
  const completed = todos.filter(todo => todo.status === "completed")

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo: TodoType) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (id: TodoType["id"]) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = (id: TodoType["id"], status: TodoType["status"]) => {
    const newState: TodoType[] = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, status: status }
      }
      return todo
    })
    setTodos(newState)
  }

  const value = {
    todos,
    pending,
    paused,
    completed,
    addTodo,
    updateTodo,
    removeTodo
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

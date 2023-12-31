import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const useTodos = () => {
  const appContext = useContext(AppContext)

  if (!appContext) {
    throw new Error("outside scope of App")
  }

  const {
    todos,
    addTodo,
    updateTodo,
    removeTodo,
    completed,
    paused,
    pending,
    removeAll
  } = appContext

  return {
    todos,
    addTodo,
    updateTodo,
    removeTodo,
    pending,
    paused,
    completed,
    removeAll
  }
}

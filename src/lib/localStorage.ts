import { TodoType } from "../types"

export const loadTodos = () => {
  const serializedState = localStorage.getItem("todos")
  try {
    if (serializedState) {
      return JSON.parse(serializedState)
    } else {
      return undefined
    }
  } catch (error) {
    return undefined
  }
}

export const saveTodos = (todos: TodoType[]) => {
  try {
    const serializedState = JSON.stringify(todos)
    localStorage.setItem("todos", serializedState)
  } catch (err) {
    console.error(err)
  }
}

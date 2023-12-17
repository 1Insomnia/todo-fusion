import { TodoType } from "../types"
import { useTodos } from "../hooks/useTodos"
// Comps
import Button from "./Button"

export default function Todo(todo: TodoType) {
  const { id, content } = todo
  const { updateTodo, removeTodo } = useTodos()

  return (
    <li className="bg-background-lighter flex items-center justify-between px-3 py-2 mt-5">
      <p className="overflow-hidden break-words">{content}</p>
      <div className="flex ml-5">
        <Button type="complete" onClick={() => updateTodo(id, "completed")} />
        <Button type="pause" onClick={() => updateTodo(id, "paused")} />
        <Button type="delete" onClick={() => removeTodo(id)} />
      </div>
    </li>
  )
}

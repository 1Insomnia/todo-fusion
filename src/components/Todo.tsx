import { TodoType } from "../types"
import { useTodos } from "../hooks/useTodos"
// Comps
import Button from "./Button"
import clsx from "clsx"

export default function Todo(todo: TodoType) {
  const { id, content, status } = todo
  const { updateTodo, removeTodo } = useTodos()
  const audio = new Audio("sound/completed.mp3")

  return (
    <li className="bg-background-lighter flex items-center justify-between px-3 py-2 mt-5">
      <p
        className={clsx(
          "overflow-hidden break-words",
          status === "completed" ? "line-through text-foreground-dark" : null
        )}
      >
        {content}
      </p>
      <div className="flex ml-5">
        {status !== "completed" && (
          <Button
            type="complete"
            onClick={() => {
              updateTodo(id, "completed")
              audio.play()
            }}
          />
        )}
        {status !== "completed" && (
          <Button
            type="pause"
            onClick={() =>
              status !== "paused"
                ? updateTodo(id, "paused")
                : updateTodo(id, "pending")
            }
          />
        )}

        <Button type="delete" onClick={() => removeTodo(id)} />
      </div>
    </li>
  )
}

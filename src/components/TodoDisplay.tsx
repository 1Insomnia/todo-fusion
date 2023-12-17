import { useTodos } from "../hooks/useTodos"
// Comps
import Todo from "./Todo"

export default function TodoDisplay() {
  const { todos } = useTodos()

  return (
    <ul className="mt-10">
      {todos.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))}
    </ul>
  )
}

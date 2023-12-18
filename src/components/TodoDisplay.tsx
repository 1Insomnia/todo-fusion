import { useTodos } from "../hooks/useTodos"
// Comps
import TodoList from "./TodoList"

export default function TodoDisplay() {
  const { pending, paused, completed } = useTodos()

  const show =
    pending.length >= 1 || paused.length >= 1 || completed.length >= 1

  return (
    show && (
      <section className="mt-5">
        {pending.length >= 1 ? (
          <TodoList
            title="pending"
            color="text-primary-purple"
            data={pending}
          />
        ) : null}
        {paused.length >= 1 ? (
          <TodoList
            title="paused"
            color="text-primary-flamingo"
            data={paused}
          />
        ) : null}
        {completed.length >= 1 ? (
          <TodoList
            title="completed"
            color="text-primary-blue"
            data={completed}
          />
        ) : null}
      </section>
    )
  )
}

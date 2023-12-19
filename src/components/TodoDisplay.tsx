import { useTodos } from "../hooks/useTodos"
// Comps
import TodoList from "./TodoList"

interface TodoDisplayProps {
  search: string
}

export default function TodoDisplay({ search }: TodoDisplayProps) {
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
            data={pending.filter(item => item.content.includes(search))}
          />
        ) : null}
        {paused.length >= 1 ? (
          <TodoList
            title="paused"
            color="text-primary-flamingo"
            data={paused.filter(item => {
              if (typeof search === "string") {
                return item.content.includes(search)
              }
            })}
          />
        ) : null}
        {completed.length >= 1 ? (
          <TodoList
            title="completed"
            color="text-primary-blue"
            data={completed.filter(item => {
              if (typeof search === "string") {
                return item.content.includes(search)
              }
            })}
          />
        ) : null}
      </section>
    )
  )
}

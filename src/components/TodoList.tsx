import { useState } from "react"
import { TodoType } from "../types"
import Todo from "./Todo"
import clsx from "clsx"

interface TodoListProps {
  title: string
  color: string
  data: TodoType[]
}

const BtnOpened = () => (
  <button className="w-button-md h-button-md flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  </button>
)

const BtnClosed = () => (
  <button className="w-button-md h-button-md flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  </button>
)

export default function TodoList({ title, color, data }: TodoListProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <article className="mt-5">
      <div
        className={clsx(
          "flex items-center justify-between w-full py-2 border-b px-3 cursor-pointer",
          color
        )}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <h2 className="">{title}</h2>
        {isOpen ? <BtnOpened /> : <BtnClosed />}
      </div>
      {isOpen ? (
        <ul className="mt-5">
          {data.map(item => (
            <Todo {...item} key={item.id} />
          ))}
        </ul>
      ) : null}
    </article>
  )
}

import clsx from "clsx"
import { v4 as uuid } from "uuid"
import React, { useState } from "react"
import { useTodos } from "../hooks/useTodos"

export default function AddTodo() {
  const [content, setContent] = useState("")
  const [errors, setErrors] = useState<string | null>(null)

  const { addTodo } = useTodos()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (content.trim()) {
      addTodo({
        id: uuid(),
        status: "pending",
        content: content
      })
      setContent("")
    } else {
      setErrors("Field can't be empty")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={clsx(
          "flex border-2 border-background-lighter",
          " focus-within:border-primary-purple"
        )}
      >
        <button
          className="text-primary-purple bg-background-lighter w-12 flex items-center justify-center outline-none"
          type="submit"
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
        <input
          className={clsx(
            "text-lg font-bold bg-background-lighter block w-full outline-none py-4 px-1"
          )}
          type="text"
          inputMode="text"
          required
          placeholder="something to do..."
          aria-label="to do content"
          tabIndex={0}
          autoComplete="off"
          maxLength={255}
          autoFocus
          id="content"
          name="content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        {errors && <p className="text-primary-purple mt-4">*{errors}*</p>}
      </div>
    </form>
  )
}

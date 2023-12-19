import clsx from "clsx"
import { useTodos } from "../hooks/useTodos"
import React from "react"

interface SearchProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<SearchProps["search"]>>
}

export default function Search({ search, setSearch }: SearchProps) {
  const { todos } = useTodos()

  return (
    todos.length > 0 && (
      <div
        className={clsx(
          "h-10 text-sm max-w-screen-sm w-full mx-auto bg-background-lighter flex mt-5",
          "focus-within:border-primary-blue"
        )}
      >
        <button className="bg-background-lighter outline-none px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <input
          className="outline-none block w-full bg-background-lighter"
          type="search"
          inputMode="search"
          required
          placeholder="search"
          aria-label="search item"
          tabIndex={1}
          autoComplete="off"
          maxLength={255}
          autoFocus
          id="search"
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
    )
  )
}

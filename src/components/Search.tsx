import clsx from "clsx"
import { useState } from "react"

export default function Search() {
  const [showbar, setShowbar] = useState(false)

  return (
    <div
      className={clsx(
        "flex bg-foreground border-2",
        "focus-within:border-primary-blue"
      )}
    >
      <button
        className="bg-foreground text-background-lighter outline-none px-2"
        tabIndex={1}
        onClick={() => setShowbar(prev => !prev)}
      >
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
        className={clsx(
          "text-background-lighter outline-none block w-full p-2 h-8",
          showbar ? "block" : "hidden"
        )}
        type="text"
        inputMode="text"
        required
        placeholder="search"
        aria-label="search item"
        tabIndex={1}
        autoComplete="off"
        maxLength={255}
        autoFocus
        id="search"
        name="search"
      />
    </div>
  )
}

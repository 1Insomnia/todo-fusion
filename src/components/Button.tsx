import clsx from "clsx"

const CompleteIcon = () => (
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
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
)

const PauseIcon = () => (
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
      d="M15.75 5.25v13.5m-7.5-13.5v13.5"
    />
  </svg>
)

const DeleteIcon = () => (
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

interface ButtonProps {
  type: "complete" | "pause" | "delete"
  onClick: () => void
}

export default function Button({ type, onClick }: ButtonProps) {
  const types = {
    complete: {
      icon: <CompleteIcon />,
      styles: "text-primary-blue"
    },
    pause: {
      icon: <PauseIcon />,
      styles: "text-primary-flamingo"
    },
    delete: {
      icon: <DeleteIcon />,
      styles: "text-primary-magenta"
    }
  }

  return (
    <button
      className={clsx(
        "w-button-md h-button-md text-center flex items-center justify-center",
        types[type].styles
      )}
      onClick={onClick}
    >
      {types[type].icon}
    </button>
  )
}

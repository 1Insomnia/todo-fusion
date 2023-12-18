import { useTodos } from "../hooks/useTodos"
import { useModalRemoveAll } from "../hooks/useModaRemoveAll"

export default function ModalRemoveAll() {
  const { removeAll } = useTodos()
  const { showModalRemoveAll, closeModalRemoveAll } = useModalRemoveAll()

  return (
    showModalRemoveAll && (
      <div className="fixed top-0 left-0 w-full h-screen bg-background/90 flex items-center justify-center">
        <div className="bg-background-lighter p-10">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold">Remove all tasks ?</h3>
            <p>
              {"<<"}All tasks{">>"} will be removed.
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 mt-5">
            <button
              className="px-4 bg-primary-magenta font-bold tracking-tight h-button-md"
              onClick={() => {
                removeAll()
                closeModalRemoveAll()
              }}
            >
              delete
            </button>
            <button
              className="px-4 bg-background font-bold tracking-tight h-button-md"
              onClick={() => closeModalRemoveAll()}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    )
  )
}

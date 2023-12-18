import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const useModalRemoveAll = () => {
  const appContext = useContext(AppContext)

  if (!appContext) {
    throw new Error("outside scope of App")
  }

  const { showModalRemoveAll, openModalRemoveAll, closeModalRemoveAll } =
    appContext

  return {
    showModalRemoveAll,
    openModalRemoveAll,
    closeModalRemoveAll
  }
}

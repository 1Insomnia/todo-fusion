// Comps
import { useState } from "react"
// Comps
import AddTodo from "./components/AddTodo"
import Header from "./components/Header"
import ModalRemoveAll from "./components/ModalRemoveAll"
import TodoDisplay from "./components/TodoDisplay"
import Search from "./components/Search"

export default function App() {
  const [search, setSearch] = useState("")

  return (
    <div className="text-foreground bg-background min-h-screen font-sans">
      <Header />
      <main className="pt-10">
        <div className="max-w-screen-lg px-5 mx-auto">
          <AddTodo />
          <Search search={search} setSearch={setSearch} />
          <TodoDisplay search={search} />
        </div>
        <ModalRemoveAll />
      </main>
    </div>
  )
}

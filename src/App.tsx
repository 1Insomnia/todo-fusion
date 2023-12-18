// Comps
import AddTodo from "./components/AddTodo"
import Header from "./components/Header"
import ModalRemoveAll from "./components/ModalRemoveAll"
import TodoDisplay from "./components/TodoDisplay"

export default function App() {
  return (
    <div className="text-foreground bg-background min-h-screen font-sans">
      <Header />
      <main className="mt-10">
        <div className="max-w-screen-lg px-5 mx-auto">
          <AddTodo />
          <TodoDisplay />
        </div>
        <ModalRemoveAll />
      </main>
    </div>
  )
}

import Search from "./Search"

export default function Header() {
  return (
    <header className=" bg-primary-purple">
      <div className="max-w-screen-lg px-5 mx-auto h-12">
        <div className="h-full flex items-center justify-between">
          <h1 className="font-bold tracking-tight">Todo Fusion</h1>
          <Search />
        </div>
      </div>
    </header>
  )
}

import { Link } from 'react-router'

export function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground mb-8 flex items-center gap-10 px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold tracking-tight">Notes App</h1>

      <ul className="flex gap-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  )
}

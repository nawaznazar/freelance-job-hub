import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import RoutesView from './routes.jsx'

export default function App() {
  const [dark, setDark] = useState(false)
  const loc = useLocation()
  useEffect(() => { document.documentElement.classList.toggle('dark', dark) }, [dark])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-card/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          <Link to="/" className="font-medium">Freelance</Link>
          <nav className="ml-auto flex items-center gap-3 text-sm">
            <Link to="/client">Client</Link>
            <Link to="/freelancer">Freelancer</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/auth/login">Login</Link>
            <button className="rounded-md border border-border px-3 py-1 hover:bg-accent" onClick={() => setDark(d => !d)} aria-pressed={dark}>
              {dark ? 'Light' : 'Dark'}
            </button>
          </nav>
        </div>
      </header>
      <main key={loc.key} className="mx-auto max-w-7xl px-4 py-6">
        <RoutesView />
      </main>
    </div>
  )
}

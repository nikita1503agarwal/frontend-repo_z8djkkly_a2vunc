import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-blue-600' : 'text-slate-300 hover:text-white hover:bg-slate-700'
    }`

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-600" />
            <span className="text-white font-semibold">FlatRate HR</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/booking" className={navLinkClass}>Booking</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/booking" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors">
              Get a Free HR Assessment
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

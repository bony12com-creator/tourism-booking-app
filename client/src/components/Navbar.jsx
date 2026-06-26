import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()

  const token = localStorage.getItem("token")
  const user = JSON.parse(
  localStorage.getItem("user")
)

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    navigate("/login")

    window.location.reload()
  }

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

  <Link
    to="/"
    className="flex items-center gap-3"
  >
    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
      T
    </div>
<div>
  <h1 className="text-2xl font-bold text-gray-800">
    Tanzania
    <span className="text-emerald-600">
      Tours
    </span>
  </h1>

  <p className="text-xs text-gray-500">
    Explore Tanzania
  </p>
</div>

  </Link>



        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-medium">

          <Link
            to="/"
            className="hover:text-emerald-600 transition duration-300"
          >
            Home
          </Link>

         <Link
  to="/tours"
  className="hover:text-emerald-600 transition duration-300"
>
  Tours
</Link>

<Link
  to="/about"
  className="hover:text-emerald-600 transition duration-300"
>
  About Us
</Link>

<Link
  to="/contact"
  className="hover:text-emerald-600 transition duration-300"
>
  Contact
</Link>
 {user?.role !== "admin" && (
  <Link
    to="/my-bookings"
    className="hover:text-emerald-600"
  >
    My Bookings
  </Link>
)}
{token ? (
  <>
    {user?.role === "admin" && (
      <Link
        to="/admin"
        className="hover:text-emerald-600 transition duration-300"
      >
        Dashboard
      </Link>
    )}

    <button
      onClick={handleLogout}
      className="text-red-600 font-semibold hover:text-red-700 transition"
    >
      Logout
    </button>
  </>
) : (
  <div className="flex gap-3">
    <Link
      to="/register"
      className="bg-emerald-600 text-white px-5 py-2 rounded-xl hover:bg-emerald-700 transition"
    >
      Register
    </Link>
  </div>
)}

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-emerald-600">
            Menu
          </h2>

          <button
            className="text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6 text-lg">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

         <Link
  to="/tours"
  onClick={() => setMenuOpen(false)}
>
  Tours
</Link>

<Link
  to="/about"
  onClick={() => setMenuOpen(false)}
>
  About Us
</Link>

<Link
  to="/contact"
  onClick={() => setMenuOpen(false)}
>
  Contact
</Link>

          {token ? (
  <>
    {user?.role === "admin" && (
  <Link
    to="/admin"
    onClick={() => setMenuOpen(false)}
  >
    Dashboard
  </Link>
)}
    <button
      onClick={handleLogout}
      className="text-left text-red-600 font-semibold"
    >
      Logout
    </button>
  </>
) : (
  <>
    
    <Link
      to="/register"
      onClick={() => setMenuOpen(false)}
    >
      Register
    </Link>
  </>
)}

        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navbar
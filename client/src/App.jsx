import WhatsAppButton from "./components/WhatsAppButton"
import Contact from "./pages/Contact"
import AdminDashboard from "./pages/AdminDashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import MyBookings from "./pages/MyBookings"
import EditProfile from "./pages/EditProfile"
import About from "./pages/About"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Tours from "./pages/Tours"
import TourDetails from "./pages/TourDetails"

import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <WhatsAppButton />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/tours"
          element={<Tours />}
        />

        <Route
          path="/tours/:id"
          element={<TourDetails />}
        />
<Route
  path="/contact"
  element={<Contact />}
/>
<Route path="/about" 
element={<About />} />
        <Route
          path="/login"
          element={<Login />}
        />
<Route
  path="/register"
  element={<Register />}
/>
<Route
  path="/edit-profile"
  element={<EditProfile />}
/>
<Route
  path="/my-bookings"
  element={<MyBookings />}
/>
<Route
  path="/profile"
  element={<Profile />}
/>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
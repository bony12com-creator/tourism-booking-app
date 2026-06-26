import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import API from "../services/api"

const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRegister = async () => {
    try {
    const res = await API.post(
  "/auth/register",
  formData
)

console.log(res.data)
      alert("Registration Successful 🎉")

      navigate("/login")
    } catch (error) {
      console.error(error)

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      )
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-emerald-600 text-white py-3 rounded-lg"
        >
          Register
        </button>

        <p className="text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-600 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Register
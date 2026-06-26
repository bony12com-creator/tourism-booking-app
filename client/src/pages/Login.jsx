import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"

const Login = () => {
  const navigate = useNavigate()

const [formData, setFormData] = useState({
  email: "",
  password: "",
  role: "user",
})
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = async () => {
    try {
      const res = await API.post(
        "/auth/login",
        formData
      )

      localStorage.setItem(
        "token",
        res.data.token
      )

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.data)
      )
alert("Login Successful 🎉")

if (res.data.data.role === "admin") {
  navigate("/admin")
} else {
  navigate("/profile")
}
    } catch (error) {
      console.error(error)

      alert(
        error.response?.data?.message ||
        "Login Failed"
      )
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

       <h1 className="text-3xl font-bold text-center mb-2">
  Welcome Back
</h1>

<p className="text-center text-gray-500 mb-6">
  Login to continue
</p>

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
<select
  name="role"
  value={formData.role}
  onChange={handleChange}
  className="w-full border p-3 rounded-lg mb-4"
>
  <option value="user">
    Login as User
  </option>

  <option value="admin">
    Login as Admin
  </option>
</select>
        <button
          onClick={handleLogin}
          className="w-full bg-emerald-600 text-white py-3 rounded-lg"
        >
          Login
        </button>
<p className="text-center mt-4">
  Don't have an account?{" "}
  <span
    onClick={() => navigate("/register")}
    className="text-emerald-600 cursor-pointer font-semibold"
  >
    Register
  </span>
</p>
      </div>

    </div>
  )
}

export default Login
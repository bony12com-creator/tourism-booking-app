import { useState } from "react"
import API from "../services/api"

const EditProfile = () => {

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  )

  const [formData, setFormData] =
    useState({
      username:
        currentUser?.username || "",

      email:
        currentUser?.email || "",

      profileImage:
        currentUser?.profileImage || "",
    })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    })
  }

  const handleImageUpload =
    async (e) => {

      const file =
        e.target.files[0]

      const data =
        new FormData()

      data.append(
        "photo",
        file
      )

      try {

        const res =
          await API.post(
            "/tours/upload",
            data
          )

        console.log(
          "UPLOADED IMAGE:",
          res.data
        )

        setFormData((prev) => ({
          ...prev,
          profileImage:
            res.data.photo,
        }))

      } catch (error) {

        console.error(error)
      }
    }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const res = await API.put(
        `/auth/update/${currentUser._id}`,
        {
          username:
            formData.username,

          email:
            formData.email,

          profileImage:
            formData.profileImage,
        }
      )

      localStorage.setItem(
        "user",
        JSON.stringify(res.data)
      )

      alert(
        "Profile Updated Successfully 🎉"
      )

      window.location.href =
        "/profile"

    } catch (error) {

      console.error(error)

      alert(
        error.response?.data?.message ||
        "Failed To Update Profile"
      )
    }
  }

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow">

        <h1 className="text-4xl font-bold mb-8">
          Edit Profile
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            placeholder="Username"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            placeholder="Email"
          />

          <div>

            <label className="block mb-2 font-semibold">
              Profile Picture
            </label>

            <input
              type="file"
              onChange={handleImageUpload}
            />

          </div>

          {formData.profileImage && (

            <img
              src={`http://localhost:5000${formData.profileImage}`}
              alt="Preview"
              className="w-32 h-32 rounded-full object-cover border"
            />

          )}

          <button
            type="submit"
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl"
          >
            Update Profile
          </button>

        </form>

      </div>

    </div>
  )
}

export default EditProfile
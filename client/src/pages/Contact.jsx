import { useState } from "react"
import API from "../services/api"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await API.post("/contact", formData)

      alert("Message sent successfully 🎉")

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      alert("Failed to send message")
    }
  }

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
            Contact Us
          </span>

          <h1 className="text-5xl font-bold mt-5 text-gray-800">
            Let's Plan Your Next Adventure
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Contact us for safari bookings,
            Zanzibar holidays and custom travel packages.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          <div className="bg-white p-8 rounded-3xl shadow">
            <div className="text-5xl">📍</div>

            <h3 className="text-2xl font-bold mt-4">
              Address
            </h3>

            <p className="text-gray-500 mt-3">
              Dar es Salaam, Tanzania
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <div className="text-5xl">📞</div>

            <h3 className="text-2xl font-bold mt-4">
              Phone
            </h3>

            <p className="text-gray-500 mt-3">
              +255 XXX XXX XXX
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <div className="text-5xl">✉️</div>

            <h3 className="text-2xl font-bold mt-4">
              Email
            </h3>

            <p className="text-gray-500 mt-3">
              info@tanzaniatours.com
            </p>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          <div className="bg-white p-8 rounded-3xl shadow">

            <h2 className="text-3xl font-bold mb-6">
              Send Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl"
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl"
                required
              />

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 rounded-xl hover:bg-emerald-700"
              >
                Send Message
              </button>

            </form>

          </div>

          <div className="bg-white p-4 rounded-3xl shadow overflow-hidden">

            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Dar%20es%20Salaam&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[500px] rounded-2xl"
            />

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact
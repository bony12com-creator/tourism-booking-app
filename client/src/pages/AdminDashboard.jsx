import { useEffect, useState } from "react"
import API from "../services/api"

const AdminDashboard = () => {
  const [messages, setMessages] = useState([])
  const [bookings, setBookings] = useState([])
  const [search, setSearch] = useState("")
  const [stats, setStats] = useState(null)
  const [tours, setTours] = useState([])
  const [editingTour, setEditingTour] = useState(null)
  const [photoFile, setPhotoFile] = useState(null)
const [newTour, setNewTour] = useState({
  title: "",
  city: "",
  address: "",
  price: "",
  capacity: "",
  photo: "",
  description: "",
  distance: "",
  maxGroupSize: "",
  category: "",
})
  const fetchTours = async () => {
  try {
    const res = await API.get("/tours")
    setTours(res.data)
  } catch (error) {
    console.error(error)
  }
}
const fetchBookings = async () => {
  try {
    const res = await API.get("/bookings")
    setBookings(res.data)
  } catch (error) {
    console.error(error)
  }
}
const fetchMessages = async () => {
  try {
    const res = await API.get("/contact")

    setMessages(res.data)
  } catch (error) {
    console.error(error)
  }
}
const fetchDashboard = async () => {
  try {
    const res = await API.get("/dashboard")
    setStats(res.data)
  } catch (error) {
    console.error(error)
  }
}

const handleDeleteTour = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this tour?"
  )

  if (!confirmDelete) return

  try {
   await API.delete(
  `/tours/${id}`,
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }
)

    fetchTours()
    fetchDashboard()

    alert("Tour Deleted Successfully")
  } catch (error) {
    console.error(error)
    alert("Failed To Delete Tour")
  }
}
const handleDeleteBooking = async (id) => {
  const confirmDelete = window.confirm(
    "Delete this booking?"
  )

  if (!confirmDelete) return

  try {
    await API.delete(`/bookings/${id}`)

    fetchBookings()

    alert("Booking Deleted Successfully")
  } catch (error) {
    console.error(error)
    alert("Failed To Delete Booking")
  }
}
const handlePaymentStatus = async (
  id
) => {
  try {

    await API.put(
      `/bookings/${id}/payment`,
      {
        paymentStatus: "Paid",
      }
    )

    fetchBookings()

  } catch (error) {
    console.error(error)

    alert(
      "Failed To Update Payment Status"
    )
  }
}
const handleDeleteMessage = async (id) => {
  const confirmDelete = window.confirm(
    "Delete this message?"
  )

  if (!confirmDelete) return

  try {
    await API.delete(`/contact/${id}`)

    fetchMessages()

    alert("Message Deleted")
  } catch (error) {
    console.error(error)

    alert("Failed To Delete Message")
  }
}
const handleUpdateBookingStatus = async (
  id,
  status
) => {
  try {
    await API.put(
      `/bookings/${id}/status`,
      { status }
    )

    fetchBookings()

    alert(
      `Booking ${status} Successfully`
    )
  } catch (error) {
    console.error(error)

    alert(
      "Failed To Update Booking"
    )
  }
}
const handleEditTour = (tour) => {
  setEditingTour(tour)

  setNewTour({
  title: tour.title,
  city: tour.city,
  address: tour.address,
  price: tour.price,
  capacity: tour.capacity,
  photo: tour.photo,
  description: tour.description,
  distance: tour.distance,
  maxGroupSize: tour.maxGroupSize,
  category: tour.category,
})
}

useEffect(() => {
  fetchDashboard()
  fetchTours()
  fetchBookings()
  fetchMessages()
}, [])
const filteredBookings =
  bookings.filter((booking) =>
    booking.fullName
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    booking.email
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  const handleTourChange = (e) => {
    setNewTour({
      ...newTour,
      [e.target.name]: e.target.value,
    })
  }
  const handlePhotoChange = (e) => {
  setPhotoFile(e.target.files[0])
}

 const handleAddTour = async () => {
  try {
    let photoPath = newTour.photo

if (photoFile) {
  console.log("PHOTO FILE:", photoFile)

  const formData = new FormData()

  formData.append("photo", photoFile)

  const uploadRes = await API.post(
    "/tours/upload",
    formData
  )

  console.log("UPLOAD RESPONSE:", uploadRes.data)

  photoPath = uploadRes.data.photo
}
    if (editingTour) {

  await API.put(
  `/tours/${editingTour._id}`,
  {
    ...newTour,
    photo: photoPath,
  },
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }
)
      alert("Tour Updated Successfully 🎉")

      setEditingTour(null)

    } else {

    await API.post(
  "/tours",
  {
    ...newTour,
    photo: photoPath,
    featured: true,
  },
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }
)

      alert("Tour Added Successfully 🎉")
    }

setNewTour({
  title: "",
  city: "",
  address: "",
  price: "",
  capacity: "",
  photo: "",
  description: "",
  distance: "",
  maxGroupSize: "",
  category: "",
})
    fetchDashboard()
    fetchTours()

  } 
 catch (error) {
  console.error(error)

  console.log("SERVER ERROR:", error.response?.data)

  alert(
    error.response?.data?.message ||
    "Operation Failed"
  )
}
}
  if (!stats) {
    return (
      <div className="text-center py-20 text-2xl">
        Loading Dashboard...
      </div>
    )
  }
const pendingBookings = bookings.filter(
  (booking) => booking.status === "Pending"
).length

const approvedBookings = bookings.filter(
  (booking) => booking.status === "Approved"
).length

const cancelledBookings = bookings.filter(
  (booking) => booking.status === "Cancelled"
).length
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Total Tours
          </h3>

          <p className="text-4xl font-bold text-blue-600">
            {stats.totalTours}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Total Bookings
          </h3>

          <p className="text-4xl font-bold text-green-600">
            {stats.totalBookings}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Revenue
          </h3>

          <p className="text-4xl font-bold text-purple-600">
  ${stats.totalRevenue}
</p>
        </div>
<div className="bg-white p-6 rounded-2xl shadow">
  <h3 className="text-gray-500">
    Pending
  </h3>

  <p className="text-4xl font-bold text-yellow-500">
    {pendingBookings}
  </p>
</div>

<div className="bg-white p-6 rounded-2xl shadow">
  <h3 className="text-gray-500">
    Approved
  </h3>

  <p className="text-4xl font-bold text-green-600">
    {approvedBookings}
  </p>
</div>

<div className="bg-white p-6 rounded-2xl shadow">
  <h3 className="text-gray-500">
    Cancelled
  </h3>

  <p className="text-4xl font-bold text-red-600">
    {cancelledBookings}
  </p>
</div>
      </div>

      {/* ADD TOUR FORM */}
      <div className="bg-white p-6 rounded-2xl shadow mt-10">

        <h2 className="text-2xl font-bold mb-6">
          Add New Tour
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            name="title"
            placeholder="Tour Title"
            value={newTour.title}
            onChange={handleTourChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={newTour.city}
            onChange={handleTourChange}
            className="border p-3 rounded-lg"
          />
          <input
        type="text"
       name="address"
       placeholder="Address"
       value={newTour.address}
      onChange={handleTourChange}
      className="border p-3 rounded-lg"
      />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newTour.price}
            onChange={handleTourChange}
            className="border p-3 rounded-lg"
          />
          <input
  type="number"
  name="capacity"
  placeholder="Available Seats"
  value={newTour.capacity}
  onChange={handleTourChange}
  className="border p-3 rounded-lg"
/>

       <input
  type="file"
  name="photo"
  onChange={handlePhotoChange}
  className="border p-3 rounded-lg"
/>
          <input
            type="number"
            name="distance"
            placeholder="Distance"
            value={newTour.distance}
            onChange={handleTourChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            name="maxGroupSize"
            placeholder="Max Group Size"
            value={newTour.maxGroupSize}
            onChange={handleTourChange}
            className="border p-3 rounded-lg"
          />
          <select
  name="category"
  value={newTour.category}
  onChange={handleTourChange}
  className="border p-3 rounded-lg"
>
  <option value="">
    Select Category
  </option>

  <option value="Safari">
    Safari
  </option>

  <option value="Beaches">
    Beaches
  </option>

  <option value="Mountains">
    Mountains
  </option>

  <option value="Cultural">
    Cultural
  </option>

  <option value="Adventure">
    Adventure
  </option>
</select>

        </div>

        <textarea
          name="description"
          placeholder="Tour Description"
          value={newTour.description}
          onChange={handleTourChange}
          className="border p-3 rounded-lg w-full mt-4"
          rows="4"
        />

        <button
          onClick={handleAddTour}
          className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
        >
          {editingTour ? "Update Tour" : "Add Tour"}
        </button>

      </div>
      {/* ALL TOURS */}
<div className="bg-white rounded-2xl shadow mt-10">

  <div className="p-6 border-b">
    <h2 className="text-2xl font-bold">
      All Tours
    </h2>
  </div>

  <div className="p-6">

    {tours.length === 0 ? (
      <p>No Tours Found</p>
    ) : (
      <div className="space-y-4">

        {tours.map((tour) => (
          <div
            key={tour._id}
            className="flex justify-between items-center border p-4 rounded-xl"
          >

            <div>
              <h3 className="font-bold text-lg">
                {tour.title}
              </h3>

              <p className="text-gray-500">
                {tour.city}
              </p>
            </div>

            <div className="flex gap-2">

  <button
    onClick={() => handleEditTour(tour)}
    className="bg-emerald-600  text-white px-4 py-2 rounded-lg hover:bg-blue-700"
  >
    Edit
  </button>

  <button
    onClick={() =>
      handleDeleteTour(tour._id)
    }
    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
  >
    Delete
  </button>

</div>

          </div>
        ))}

      </div>
    )}

  </div>

</div>

      {/* BOOKINGS TABLE */}
      <div className="bg-white rounded-2xl shadow mt-10 overflow-hidden">

        <div className="p-6 border-b flex justify-between items-center">

  <h2 className="text-2xl font-bold">
    Bookings
  </h2>

  <input
    type="text"
    placeholder="Search name or email..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="border p-2 rounded-lg"
  />

</div>

        <table className="w-full">

        <thead className="bg-gray-50">
 <tr>
  <th className="p-4 text-left">Name</th>
  <th className="p-4 text-left">Email</th>
  <th className="p-4 text-left">Guests</th>
  <th className="p-4 text-left">Date</th>
  <th className="p-4 text-left">Payment</th>
  <th className="p-4 text-left">Paid</th>
  <th className="p-4 text-left">Status</th>
  <th className="p-4 text-left">Actions</th>
</tr>
</thead>

          <tbody>

         {filteredBookings.map((booking) => (
  <tr
    key={booking._id}
    className="border-b"
  >
    <td className="p-4">
      {booking.fullName}
    </td>

    <td className="p-4">
      {booking.email}
    </td>

    <td className="p-4">
      {booking.guests}
    </td>

    <td className="p-4">
      {new Date(
        booking.bookingDate
      ).toLocaleDateString()}
    </td>
    <td className="p-4">
  {booking.paymentMethod}
</td>
<td className="p-4">
  <span
    className={`px-3 py-1 rounded-full text-white ${
      booking.paymentStatus === "Paid"
        ? "bg-green-600"
        : "bg-yellow-500"
    }`}
  >
    {booking.paymentStatus}
  </span>
</td>

    <td className="p-4">
  <span
    className={`px-3 py-1 rounded-full text-white ${
      booking.status === "Approved"
        ? "bg-green-600"
        : booking.status === "Cancelled"
        ? "bg-red-600"
        : "bg-yellow-500"
    }`}
  >
    {booking.status}
  </span>
</td>

   <td className="p-4">
  <div className="flex gap-2">

    <button
      onClick={() =>
        handleUpdateBookingStatus(
          booking._id,
          "Approved"
        )
      }
      className="bg-green-600 text-white px-3 py-2 rounded-lg"
    >
      Approve
    </button>

    <button
      onClick={() =>
        handleUpdateBookingStatus(
          booking._id,
          "Cancelled"
        )
      }
      className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
    >
      Cancel
    </button>
    {booking.paymentStatus !==
  "Paid" && (
  <button
    onClick={() =>
      handlePaymentStatus(
        booking._id
      )
    }
    className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
  >
    Mark Paid
  </button>
)}

    <button
      onClick={() =>
        handleDeleteBooking(
          booking._id
        )
      }
      className="bg-red-600 text-white px-3 py-2 rounded-lg"
    >
      Delete
    </button>

  </div>
</td>
  </tr>
))}

          </tbody>

        </table>

      </div>
{/* CONTACT MESSAGES */}

<div className="bg-white rounded-2xl shadow mt-10">

  <div className="p-6 border-b">
    <h2 className="text-2xl font-bold">
      Contact Messages
    </h2>
  </div>

  <div className="p-6">

    {messages.length === 0 ? (
      <p>No Messages Found</p>
    ) : (
      <div className="space-y-4">

        {messages.map((message) => (
          <div
            key={message._id}
            className="border p-4 rounded-xl"
          >

            <h3 className="font-bold">
              {message.name}
            </h3>

            <p className="text-gray-500">
              {message.email}
            </p>

            <p className="mt-2 font-semibold">
              {message.subject}
            </p>

            <p className="mt-2">
              {message.message}
            </p>
            <button
  onClick={() =>
    handleDeleteMessage(
      message._id
    )
  }
  className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
>
  Delete Message
</button>

          </div>
        ))}

      </div>
    )}

  </div>

</div>
    </div>

  )
}

export default AdminDashboard
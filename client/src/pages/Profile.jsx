import { useEffect, useState } from "react"
import API from "../services/api"

const Profile = () => {
  const user = JSON.parse(
    localStorage.getItem("user")
  )

  const [bookings, setBookings] =
    useState([])

  if (!user) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold">
          Please Login First
        </h1>
      </div>
    )
  }

  useEffect(() => {

    const fetchBookings = async () => {
      try {

        const res = await API.get(
          `/bookings/user/${user._id}`
        )

        setBookings(res.data)

      } catch (error) {
        console.error(error)
      }
    }

    fetchBookings()

  }, [user?._id])

  const totalBookings =
    bookings.length

  const pendingBookings =
    bookings.filter(
      (b) => b.status === "Pending"
    ).length

  const approvedBookings =
    bookings.filter(
      (b) => b.status === "Approved"
    ).length

  return (
    <div className="pt-32 min-h-screen bg-gray-50">

      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow">
<div className="flex justify-center mb-8">

  <img
    src={
      user?.profileImage
        ? `http://localhost:5000${user.profileImage}`
        : "https://via.placeholder.com/150"
    }
    alt="Profile"
    className="w-32 h-32 rounded-full object-cover border-4 border-emerald-500"
  />

</div>
        <h1 className="text-4xl font-bold mb-8">
          My Profile
        </h1>

        <div className="space-y-4">

          <div>
            <span className="font-semibold">
              Username:
            </span>{" "}
            {user.username}
          </div>

          <div>
            <span className="font-semibold">
              Email:
            </span>{" "}
            {user.email}
          </div>

          <div>
            <span className="font-semibold">
              Role:
            </span>{" "}
            {user.role}
          </div>

        </div>

        {/* Dashboard Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-emerald-100 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold">
              {totalBookings}
            </h3>

            <p>Total Bookings</p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold">
              {pendingBookings}
            </h3>

            <p>Pending Bookings</p>
          </div>

          <div className="bg-green-100 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold">
              {approvedBookings}
            </h3>

            <p>Approved Bookings</p>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="flex flex-wrap gap-4 mt-10">

          <a
            href="/my-bookings"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl"
          >
            My Bookings
          </a>

          <a
            href="/tours"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            Explore Tours
          </a>
          <a
  href="/edit-profile"
  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl"
>
  Edit Profile
</a>

        </div>

      </div>

    </div>
  )
}

export default Profile
import { useEffect, useState } from "react"
import API from "../services/api"
console.log("REQUEST SENT")
const MyBookings = () => {
  const [bookings, setBookings] = useState([])
  const handleDeleteBooking = async (id) => {
  try {

    await API.delete(
      `/bookings/${id}`
    )

    setBookings(
      bookings.filter(
        (booking) =>
          booking._id !== id
      )
    )

    alert(
      "Booking cancelled successfully"
    )

  } catch (error) {
    console.error(error)

    alert(
      "Failed to cancel booking"
    )
  }
}

 useEffect(() => {
const fetchBookings = async () => {
  try {

    const user = JSON.parse(
      localStorage.getItem("user")
    )

    console.log("USER:", user)

    const res = await API.get(
      `/bookings/user/${user._id}`
    )

    console.log("BOOKINGS:", res.data)

    setBookings(res.data)

  } catch (error) {
    console.error(error)
  }
}
  fetchBookings()
}, [])
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10">
          My Bookings
        </h1>
        <div className="grid gap-6">

          {bookings.length === 0 ? (

            <div className="bg-white p-10 rounded-2xl text-center shadow">
              <h2 className="text-2xl font-semibold text-gray-700">
                No Bookings Found
              </h2>

              <p className="text-gray-500 mt-2">
                You haven't booked any tours yet.
              </p>
            </div>

          ) : (

            bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white p-6 rounded-2xl shadow"
              >
          <h2 className="text-2xl font-bold mb-4 text-emerald-700">
           {booking.tourId?.title}
           </h2>
                <p className="mb-2">
                  <strong>Name:</strong>{" "}
                  {booking.fullName}
                </p>

                <p className="mb-2">
                  <strong>Guests:</strong>{" "}
                  {booking.guests}
                </p>

                <p className="mb-2">
                  <strong>Date:</strong>{" "}
                  {new Date(
                    booking.bookingDate
                  ).toLocaleDateString()}
                </p>

                <p className="mb-2">
                  <strong>Payment Method:</strong>{" "}
                  {booking.paymentMethod}
                </p>

                <p className="mb-2">
                  <strong>Status:</strong>{" "}
                  <span
  className={`font-semibold ${
    booking.status === "Approved"
      ? "text-green-600"
      : booking.status === "Cancelled"
      ? "text-red-600"
      : "text-amber-600"
  }`}
>
  {booking.status}
</span>
                </p>

                <p>
                  <strong>Payment Status:</strong>{" "}
                  <span className="text-emerald-600 font-semibold">
                    {booking.paymentStatus}
                  </span>
                </p>
    <button
  onClick={() =>
    handleDeleteBooking(
      booking._id
    )
  }
  className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
>
  Cancel Booking
</button>

              </div>
            ))

          )}

        </div>

      </div>
    </div>
  )
}

export default MyBookings
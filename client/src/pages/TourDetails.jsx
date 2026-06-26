import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import API from "../services/api"
import TourCard from "../components/TourCard"

const TourDetails = () => {
const { id } = useParams()

const [tour, setTour] = useState(null)

const [relatedTours, setRelatedTours] =
  useState([])
const [loading, setLoading] = useState(true)
const [showSuccess, setShowSuccess] =
  useState(false)

const [bookingRef, setBookingRef] =
  useState("")
  const [reviews, setReviews] =
  useState([])
  const [tourBookings, setTourBookings] =
  useState([])
  const averageRating =
  reviews.length > 0
    ? (
        reviews.reduce(
          (sum, review) =>
            sum +
            review.rating,
          0
        ) /
        reviews.length
      ).toFixed(1)
    : 0

const [reviewData, setReviewData] =
  useState({
    rating: 5,
    comment: "",
  })

 const [booking, setBooking] = useState({
  fullName: "",
  email: "",
  phone: "",
  guests: 1,
  bookingDate: "",
  paymentMethod: "M-Pesa",
})
const serviceFee = 20

const totalPrice =
  tour
    ? tour.price *
        Number(booking.guests) +
      serviceFee
    : 0
    const bookedSeats =
  tourBookings.reduce(
    (total, booking) =>
      total +
      Number(
        booking.guests
      ),
    0
  )
  const remainingSeats =
  tour
    ? tour.capacity -
      bookedSeats
    : 0
    
useEffect(() => {
  const fetchTour = async () => {
    try {

      const response =
        await API.get(
          `/tours/${id}`
        )
console.log("TOUR DATA:", response.data)
      setTour(
        response.data
      )

      const toursResponse =
        await API.get(
          "/tours"
        )

      const related =
        toursResponse.data
          .filter(
            (item) =>
              item._id !==
                response.data._id &&
              item.category ===
                response.data.category
          )
          .slice(0, 3)

      setRelatedTours(
        related
      )

    } catch (error) {

      console.error(error)

    } finally {

      setLoading(false)
    }
  }
fetchTour()
fetchReviews()
fetchTourBookings()

}, [id])
const fetchReviews = async () => {

  try {

    const res = await API.get(
      `/reviews/${id}`
    )

    setReviews(res.data)

  } catch (error) {

    console.error(error)
  }
}
const fetchTourBookings = async () => {
  try {

    const res = await API.get(
      `/bookings/tour/${id}`
    )

    setTourBookings(res.data)

  } catch (error) {

    console.error(
      "Failed to fetch bookings:",
      error
    )
  }
}
  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    })
  }
const handleReviewSubmit =
  async (e) => {

    e.preventDefault()

    try {

      const user =
        JSON.parse(
          localStorage.getItem(
            "user"
          )
        )

      await API.post(
        "/reviews",
        {
          tourId: id,
          userId: user._id,
          username:
            user.username,
          rating:
            reviewData.rating,
          comment:
            reviewData.comment,
        }
      )

      alert(
        "Review Added Successfully ⭐"
      )

      fetchReviews()

      setReviewData({
        rating: 5,
        comment: "",
      })

    } catch (error) {

      console.error(error)

      alert(
        "Failed To Add Review"
      )
    }
  }
  const handleBooking = async () => {
    if (
      !booking.fullName ||
      !booking.email ||
      !booking.phone ||
      !booking.bookingDate
    ) {
      alert("Please fill all fields")
      return
    }
if (remainingSeats <= 0) {
  alert("This tour is fully booked")
  return
}

if (
  Number(booking.guests) >
  remainingSeats
) {
  alert(
    `Only ${remainingSeats} seats remaining`
  )
  return
}
    try {
      const user = JSON.parse(
  localStorage.getItem("user")
)

const bookingData = {
  ...booking,
  tourId: tour._id,
  userId: user?._id,
}
    await API.post("/bookings", bookingData)

const ref =
  "TT-" +
  Math.floor(
    10000 + Math.random() * 90000
  )

setBookingRef(ref)

setShowSuccess(true)

    setBooking({
  fullName: "",
  email: "",
  phone: "",
  guests: 1,
  bookingDate: "",
  paymentMethod: "M-Pesa",
})
    } catch (error) {
      console.error("Booking Error:", error)
      alert("Booking Failed")
    }
  }

  if (loading) {
    return (
      <div className="pt-32 text-center text-2xl font-semibold">
        Loading Tour...
      </div>
    )
  }

  if (!tour) {
    return (
      <div className="pt-32 text-center text-red-500 text-2xl">
        Tour Not Found
      </div>
    )
  }

  return (
    <div className="pt-24 bg-gray-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <img
  src={
    tour.photo?.startsWith("/uploads")
      ? `http://localhost:5000${tour.photo}`
      : tour.photo
  }
  alt={tour.title}
  className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
/>

        <div className="grid lg:grid-cols-3 gap-10 mt-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            <h1 className="text-5xl font-bold text-gray-800">
              {tour.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-4">

  <span className="text-yellow-500 text-lg font-medium">
  ⭐ {averageRating}
  {" "}
  ({reviews.length} Reviews)
</span>

  <span className="text-gray-600">
    📍 {tour.city}
  </span>

  {tour.category && (
    <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
      {tour.category}
    </span>
  )}

</div>

            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              {tour.description}
            </p>

            <div className="grid md:grid-cols-3 gap-5 mt-10">

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold text-gray-500">
                  Distance
                </h3>

                <p className="text-2xl font-bold">
                  {tour.distance} km
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold text-gray-500">
                  Group Size
                </h3>

                <p className="text-2xl font-bold">
                  {tour.maxGroupSize} People
                </p>
              </div>

 <div className="bg-white p-6 rounded-2xl shadow">

  <h3 className="font-semibold text-gray-500">
    Tour Capacity
  </h3>

  <p className="text-2xl font-bold">
    {tour.capacity}
  </p>

  <p className="mt-2 text-blue-600 font-semibold">
    Booked: {bookedSeats}
  </p>

  <p className="mt-2 text-green-600 font-bold">
    Remaining: {remainingSeats}
  </p>

</div>

            </div>

          </div>

          {/* BOOKING CARD */}
          <div>

            <div className="bg-white p-8 rounded-3xl shadow-xl sticky top-28">

              <h2 className="text-4xl font-bold text-emerald-600 ">
                ${tour.price}
              </h2>

              <p className="text-gray-500 mt-2">
                per person
              </p>

              <div className="space-y-4 mt-6">

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={booking.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={booking.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={booking.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />

                <input
                  type="number"
                  name="guests"
                  min="1"
                  value={booking.guests}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />

                <input
                  type="date"
                  name="bookingDate"
                  value={booking.bookingDate}
                  onChange={handleChange}
        
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 "
                  
                />
                <select
  name="paymentMethod"
  value={booking.paymentMethod}
  onChange={handleChange}
  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
>
  <option value="M-Pesa">
    M-Pesa
  </option>

  <option value="Airtel Money">
    Airtel Money
  </option>

  <option value="Tigo Pesa">
    Tigo Pesa
  </option>

  <option value="Bank Transfer">
    Bank Transfer
  </option>
</select>

                <button
  onClick={handleBooking}
  disabled={remainingSeats <= 0}
  className={`w-full py-4 rounded-xl text-white ${
    remainingSeats <= 0
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-emerald-600 hover:bg-emerald-700"
  }`}
>
  {remainingSeats <= 0
    ? "Fully Booked"
    : "Book Now"}
</button>

              </div>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between">
             <span>
            Tour Price × {booking.guests}
            </span>

               <span>
                 $
            {tour.price *
              Number(booking.guests)}
               </span>
               </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span>$20</span>
                </div>

                <hr />

                <div className="flex justify-between font-bold text-lg text-emerald-600">
            <span>Total</span>
            <span>
             ${totalPrice}
             </span>
             </div>
              </div>

            </div>

          </div>

           </div>
<div className="mt-20">

  <h2 className="text-3xl font-bold mb-6">
    Tour Reviews
  </h2>
  <form
  onSubmit={handleReviewSubmit}
  className="bg-white p-6 rounded-2xl shadow mb-6"
>

  <select
    value={reviewData.rating}
    onChange={(e) =>
      setReviewData({
        ...reviewData,
        rating: Number(
          e.target.value
        ),
      })
    }
    className="w-full border p-3 rounded-lg mb-4"
  >

    <option value="5">
      ⭐⭐⭐⭐⭐
    </option>

    <option value="4">
      ⭐⭐⭐⭐
    </option>

    <option value="3">
      ⭐⭐⭐
    </option>

    <option value="2">
      ⭐⭐
    </option>

    <option value="1">
      ⭐
    </option>

  </select>

  <textarea
    placeholder="Write your review..."
    value={reviewData.comment}
    onChange={(e) =>
      setReviewData({
        ...reviewData,
        comment:
          e.target.value,
      })
    }
    className="w-full border p-3 rounded-lg mb-4"
  />

  <button
    type="submit"
    className="bg-emerald-600 text-white px-6 py-3 rounded-xl"
  >
    Submit Review
  </button>

</form>

  {reviews.length === 0 ? (

    <div className="bg-white p-6 rounded-2xl shadow">

      <p className="text-gray-500">
        No Reviews Yet
      </p>

    </div>

  ) : (

    <div className="space-y-4">

      {reviews.map((review) => (

        <div
          key={review._id}
          className="bg-white p-6 rounded-2xl shadow"
        >

          <h3 className="font-bold text-lg">
            {review.username}
          </h3>

          <p className="text-yellow-500">
            {"⭐".repeat(review.rating)}
          </p>

          <p className="text-gray-600 mt-2">
            {review.comment}
          </p>

        </div>

      ))}

    </div>

  )}

</div>
        {/* Related Tours */}

        <div className="mt-24">

          <div className="text-center">

            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
              More Adventures
            </span>

            <h2 className="text-4xl font-bold text-gray-800 mt-4">
              You May Also Like
            </h2>

            <p className="text-gray-500 mt-3">
              Discover similar tours across Tanzania
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            {relatedTours.map((item) => (
              <TourCard
                key={item._id}
                _id={item._id}
                title={item.title}
                location={item.city}
                price={item.price}
                image={item.photo}
                category={item.category}
              />
            ))}

          </div>

        </div>

      </div>
      {showSuccess && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md text-center">

      <div className="text-6xl mb-4">
        ✅
      </div>

      <h2 className="text-3xl font-bold text-gray-800">
        Booking Confirmed
      </h2>

     <div className="mt-4 space-y-3">

  <p className="text-gray-500">
    Thank you for choosing Tanzania Tours.
  </p>

  <div className="bg-emerald-50 p-4 rounded-xl">

    <p className="text-sm text-gray-500">
      Booking Reference
    </p>

    <h3 className="text-2xl font-bold text-emerald-600">
      {bookingRef}
    </h3>

  </div>

  <div className="text-left bg-gray-50 p-4 rounded-xl">

    <p>
      <strong>Tour:</strong>{" "}
      {tour.title}
    </p>

    <p>
      <strong>Guests:</strong>{" "}
      {booking.guests}
    </p>

    <p>
      <strong>Total:</strong>{" "}
      ${totalPrice}
    </p>

  </div>

</div>
      <button
        onClick={() => setShowSuccess(false)}
        className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
      >
        Continue Exploring
      </button>

    </div>

  </div>
)}
    </div>
  )
}

export default TourDetails
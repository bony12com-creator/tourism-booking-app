const express = require("express")

const router = express.Router()

const {
createBooking,
getAllBookings,
deleteBooking,
updateBookingStatus,
updatePaymentStatus,
getUserBookings,
getBookingsByTour,
} = require("../controllers/bookingController")
// CREATE BOOKING
router.post("/", createBooking)

router.get(
  "/user/:id",
  getUserBookings
)
router.get(
  "/tour/:id",
  getBookingsByTour
)
// GET ALL BOOKINGS
router.get("/", getAllBookings)

// UPDATE BOOKING STATUS
router.put(
"/:id/status",
updateBookingStatus
)

// UPDATE PAYMENT STATUS
router.put(
"/:id/payment",
updatePaymentStatus
)

// DELETE BOOKING
router.delete(
"/:id",
deleteBooking
)

module.exports = router

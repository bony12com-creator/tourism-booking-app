const express = require("express")

const {
  createBooking,
  getAllBookings,
  updateBookingStatus,
  updatePaymentStatus,
  deleteBooking,
  getUserBookings,
} = require("../controllers/bookingController")

const router = express.Router()

router.post("/", createBooking)

router.get("/", getAllBookings)

router.get("/user/:id", getUserBookings)

router.put(
  "/status/:id",
  updateBookingStatus
)

router.put(
  "/payment/:id",
  updatePaymentStatus
)

router.delete("/:id", deleteBooking)

module.exports = router
const Booking = require("../models/Booking")
const sendEmail = require("../utils/sendEmail")

// CREATE BOOKING
const createBooking = async (
  req,
  res
) => {
  try {
  console.log(req.body)
    const booking = await Booking.create(
      req.body
    )

    await sendEmail(
      "bonymaganga@gmail.com",
      "New Tour Booking",
      `
New Booking Received

Name: ${req.body.fullName}

Email: ${req.body.email}

Phone: ${req.body.phone}

Guests: ${req.body.guests}

Booking Date:
${req.body.bookingDate}
      `
    )

    res.status(201).json(booking)

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// GET ALL BOOKINGS
const getAllBookings = async (
  req,
  res
) => {
  try {

    const bookings =
      await Booking.find()
        .populate("tourId", "title")
        .sort({ createdAt: -1 })

    res.status(200).json(bookings)

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// UPDATE BOOKING STATUS
const updateBookingStatus = async (
  req,
  res
) => {
  try {

    const booking =
      await Booking.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        { new: true }
      )

    res.status(200).json(booking)

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
// UPDATE PAYMENT STATUS
const updatePaymentStatus = async (
  req,
  res
) => {
  try {

    const booking =
      await Booking.findByIdAndUpdate(
        req.params.id,
        {
          paymentStatus:
            req.body.paymentStatus,
        },
        { new: true }
      )

    res.status(200).json(booking)

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
// DELETE BOOKING
const deleteBooking = async (
  req,
  res
) => {
  try {

    await Booking.findByIdAndDelete(
      req.params.id
    )

    res.status(200).json({
      message:
        "Booking deleted successfully",
    })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
const getUserBookings = async (req, res) => {
  try {

    console.log("PARAM ID:", req.params.id)

    const bookings = await Booking.find({
  userId: req.params.id,
}).populate("tourId", "title")
    console.log("BOOKINGS:", bookings)

    res.status(200).json(bookings)

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
const getBookingsByTour = async (
  req,
  res
) => {
  try {

    const bookings =
      await Booking.find({
        tourId: req.params.id,
        status: "Approved",
      })

    res.status(200).json(bookings)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

module.exports = {
  createBooking,
  getAllBookings,
  updateBookingStatus,
  updatePaymentStatus,
  deleteBooking,
  getUserBookings,
  getBookingsByTour,
}
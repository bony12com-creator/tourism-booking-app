const Tour = require("../models/Tour")
const Booking = require("../models/Booking")

const getDashboardStats = async (req, res) => {
  try {
    const totalTours =
      await Tour.countDocuments()

    const totalBookings =
      await Booking.countDocuments()

    const recentBookings =
      await Booking.find()
        .sort({ createdAt: -1 })
        .limit(5)

    // Approved bookings only
    const paidBookings =
  await Booking.find({
    paymentStatus: "Paid",
  }).populate("tourId")
    let totalRevenue = 0

   paidBookings.forEach(
      (booking) => {
        if (booking.tourId) {
          totalRevenue +=
            booking.tourId.price *
            booking.guests
        }
      }
    )

    res.status(200).json({
      totalTours,
      totalBookings,
      totalRevenue,
      recentBookings,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  getDashboardStats,
}
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

// Routes
const tourRoutes = require("./routes/tourRoutes")
const bookingRoutes = require("./routes/bookingRoutes")
const authRoutes = require("./routes/authRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")
const contactRoutes = require("./routes/contactRoutes")
const reviewRoutes = require("./routes/reviewRoutes")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"))

// API Routes
app.use("/api/tours", tourRoutes)
app.use("/api/bookings", bookingRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/dashboard", dashboardRoutes)
app.use("/api/contact", contactRoutes)
app.use("/api/reviews", reviewRoutes)

// Test Route
app.get("/", (req, res) => {
  res.send("Tourism API Running...")
})

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully")
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error")
    console.log(err)
  })

// Port
const PORT = process.env.PORT || 5000

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
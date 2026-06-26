const mongoose = require("mongoose")

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    capacity: {
  type: Number,
  required: true,
},

    city: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    distance: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    maxGroupSize: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },
    category: {
  type: String,
  required: true,
  enum: [
    "Beaches",
    "Safari",
    "Mountains",
    "Cultural",
    "Adventure",
  ],
},

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Tour", tourSchema)
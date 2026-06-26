const Tour = require("../models/Tour")
const Review =
  require("../models/Review")

// Create Tour
const createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body)

    const savedTour = await newTour.save()

    res.status(201).json(savedTour)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// Get All Tours
const getAllTours = async (req, res) => {
  try {

    const tours =
      await Tour.find()

    const toursWithRatings =
      await Promise.all(

        tours.map(
          async (tour) => {

            const reviews =
              await Review.find({
                tourId:
                  tour._id,
              })

            const averageRating =
              reviews.length > 0
                ? (
                    reviews.reduce(
                      (
                        sum,
                        review
                      ) =>
                        sum +
                        review.rating,
                      0
                    ) /
                    reviews.length
                  ).toFixed(1)
                : 0

            return {
              ...tour._doc,
              averageRating,
              reviewCount:
                reviews.length,
            }
          }
        )
      )

    res.status(200).json(
      toursWithRatings
    )

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    })
  }
}

// Get Single Tour
const getSingleTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id)

    if (!tour) {
      return res.status(404).json({
        message: "Tour not found",
      })
    }

    res.status(200).json(tour)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// Delete Tour
const deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id)

    res.status(200).json({
      message: "Tour Deleted Successfully",
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
const updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.status(200).json(updatedTour)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
module.exports = {
  createTour,
  getAllTours,
  getSingleTour,
  deleteTour,
   updateTour,
}

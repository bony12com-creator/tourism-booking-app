const Review =
  require("../models/Review")

const createReview = async (
  req,
  res
) => {
  try {

    const review =
      await Review.create(
        req.body
      )

    res.status(201).json(
      review
    )

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    })
  }
}

const getTourReviews =
  async (req, res) => {

    try {

      const reviews =
        await Review.find({
          tourId:
            req.params.id,
        })

      res.status(200).json(
        reviews
      )

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      })
    }
  }

module.exports = {
  createReview,
  getTourReviews,
}
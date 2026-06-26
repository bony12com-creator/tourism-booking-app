const express =
  require("express")

const router =
  express.Router()

const {
  createReview,
  getTourReviews,
} = require(
  "../controllers/reviewController"
)

router.post(
  "/",
  createReview
)

router.get(
  "/:id",
  getTourReviews
)

module.exports =
  router
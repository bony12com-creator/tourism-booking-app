const verifyAdmin = require("../middleware/verifyAdmin")
const express = require("express")
const router = express.Router()

const upload = require("../multer")
const tourController = require("../controllers/tourController")

// GET all tours
router.get(
  "/",
  tourController.getAllTours
)

// GET single tour
router.get(
  "/:id",
  tourController.getSingleTour
)

// UPLOAD PHOTO
router.post(
  "/upload",
  upload.single("photo"),
  (req, res) => {
    res.status(200).json({
      photo: `/uploads/${req.file.filename}`,
    })
  }
)

// CREATE TOUR
router.post(
  "/",
  verifyAdmin,
  tourController.createTour
)

// UPDATE TOUR
router.put(
  "/:id",
  verifyAdmin,
  tourController.updateTour
)

// DELETE TOUR
router.delete(
  "/:id",
  verifyAdmin,
  tourController.deleteTour
)

module.exports = router
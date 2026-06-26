const express = require("express")

const router = express.Router()

const {
  createMessage,
  getMessages,
  deleteMessage,
} = require("../controllers/contactController")

router.post("/", createMessage)

router.get("/", getMessages)

router.delete("/:id", deleteMessage)

module.exports = router
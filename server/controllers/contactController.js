const Contact = require("../models/Contact")
const sendEmail = require("../utils/sendEmail")

const createMessage = async (
  req,
  res
) => {
  try {

    const message =
      await Contact.create(req.body)

    await sendEmail(
      "bonymaganga@gmail.com",
      "New Contact Message",
      `
Name: ${req.body.name}

Email: ${req.body.email}

Subject: ${req.body.subject}

Message:
${req.body.message}
      `
    )

    res.status(201).json(message)

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

const getMessages = async (
  req,
  res
) => {
  try {

    const messages =
      await Contact.find().sort({
        createdAt: -1,
      })

    res.status(200).json(messages)

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

const deleteMessage = async (
  req,
  res
) => {
  try {

    await Contact.findByIdAndDelete(
      req.params.id
    )

    res.status(200).json({
      message: "Deleted Successfully",
    })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  createMessage,
  getMessages,
  deleteMessage,
}
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// REGISTER

const register = async (req, res) => {
  try {

    const salt =
      await bcrypt.genSalt(10)

    const hashedPassword =
      await bcrypt.hash(
        req.body.password,
        salt
      )

    let role = "user"

    if (
      req.body.adminKey &&
      req.body.adminKey ===
        process.env.ADMIN_SECRET
    ) {
      role = "admin"
    }

    const newUser = new User({
      username:
        req.body.username,

      email:
        req.body.email,

      password:
        hashedPassword,

      role,
    })

    const savedUser =
      await newUser.save()

    res.status(201).json(
      savedUser
    )

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    })
  }
}

// LOGIN

const login = async (req, res) => {
  try {

    console.log(
      "LOGIN DATA:",
      req.body
    )

    const user =
      await User.findOne({
        email:
          req.body.email,
      })

    if (!user) {
      return res.status(404).json({
        message:
          "User not found",
      })
    }

    const isPasswordCorrect =
      await bcrypt.compare(
        req.body.password,
        user.password
      )

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message:
          "Invalid password",
      })
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      "secretkey",
      {
        expiresIn: "7d",
      }
    )

    const {
      password,
      ...others
    } = user._doc

    res.status(200).json({
      token,
      data: others,
    })

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    })
  }
}

// UPDATE PROFILE

const updateProfile = async (
  req,
  res
) => {
  try {

    const updatedUser =
  await User.findByIdAndUpdate(
    req.params.id,
    {
      username:
        req.body.username,

      email:
        req.body.email,

      profileImage:
        req.body.profileImage,
    },
    { new: true }
  )
    res.status(200).json(
      updatedUser
    )

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    })
  }
}

module.exports = {
  register,
  login,
  updateProfile,
}
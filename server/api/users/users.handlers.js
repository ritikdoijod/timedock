import { User } from "./users.models.js"
import { hash } from "argon2"
import { CustomError } from "../../middlewares/error-handler.js"

const createUser = async (req, res, next) => {
  try {
    const { username, email, password, name } = req.body

    // check if user already exist
    const existingUser = await User.findOne({ $or: [{ username }, { email }] })

    if (existingUser) throw new Error("User already exist with given username or email.");

    // hash password
    const hashedPassword = await hash(password);

    const newUser = new User({
      username,
      email,
      name,
      password: hashedPassword
    })

    await newUser.save();

    return res.status(201).json({
      status: 'success',
      data: {
        newUser
      },
      error: null
    })
  } catch (error) {
    next(new CustomError(500, 500, error.message))
  }
}

export { createUser };

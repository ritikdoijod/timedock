import { User } from "../users/users.models.js";
import { verify } from "argon2"
import jwt from "jsonwebtoken"
import { CustomError } from "../../middlewares/error-handler.js"

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).exec();

    if (user && await verify(user.password, password)) {
      const token = jwt.sign({ username, exp: Math.floor(Date.now() / 1000) + (60 * 60) }, process.env.AUTH_SECRET);
      return res.status(200).json({
        status: "success",
        data: {
          token
        },
        error: null
      })
    }

    return res.status(401).json({
      status: "error",
      data: null,
      error: {
        code: 401,
        message: "invalid credentials"
      }
    });
  } catch (error) {
    next(new CustomError(500, 500, error.message))
  }
}

export { login };

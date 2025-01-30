import jwt from "jsonwebtoken"
import { CustomError } from "./error-handler.js";

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (authorization && authorization.startsWith('Bearer')) {
      const token = authorization.split(' ')[1];
      if (jwt.verify(token, process.env.AUTH_SECRET)) return next();
    }

    return res.status(401).json({
      status: "error",
      data: null,
      error: {
        code: 401,
        message: "Unauthorized request"
      }
    })

  } catch (error) {
    next(new CustomError(500, 500, error.message))
  }
}

export { auth };

import express from "express"
import cors from "cors"
import authRoutes from "./auth/auth.routes.js"
import userRoutes from "./users/users.routes.js"
import v1Routes from "./v1/index.js";
import { auth } from "../middlewares/auth.js"

const corsOptions = {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  maxAge: 300,
  allowedHeaders: ['content-type', 'authorization', 'accept', 'x-access-token'],
  exposedHeaders: ['X-RateLimit-Limit', 'X-RateLimit-Remaining', 'X-RateLimit-Reset']
}

const router = express.Router({ caseSensitive: true, mergeParams: true })

router.use(cors(corsOptions))

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

router.use(auth)
router.use('/v1', v1Routes);

router.all('/test', async (req, res) => {
  return res.json({ status: "success", endpoint: 0 })
})

export default router;

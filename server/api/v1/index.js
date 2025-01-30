import { Router } from "express"

const router = Router();

router.all("/test", (req, res) => res.status(200).json({
  status: "success"
}))

export default router;

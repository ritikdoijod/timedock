import { Router } from "express"
import { validate } from "../../middlewares/validate.js"
import { user } from "./users.validations.js"
import { createUser } from "./users.handlers.js";

const router = Router();

router.post('/', validate({ body: user }), createUser);

export default router;

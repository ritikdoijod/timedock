import { CustomError } from "./error-handler.js";

const validate = ({ params, query, body }) => async (req, res, next) => {
  const errors = []

  if (params) {
    const parsed = params.safeParse(req.params)
    if (!parsed.success) errors.push({ path: "params", errors: parsed.error.issues })
  }


  if (query) {
    const parsed = query.safeParse(req.query)
    if (!parsed.success) errors.push({ path: "query", errors: parsed.error.issues })
  }


  if (body) {
    const parsed = body.safeParse(req.body)
    if (!parsed.success) errors.push({ path: "body", errors: parsed.error.issues })
  }

  if (errors.length > 0) return next(new CustomError(500, 500, "Request validation failed.", errors))

  return next();
}

export { validate };

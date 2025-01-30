import { z } from "zod"

const user = z.object({
  username: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().regex(/^.{8}$/),
  name: z.object({
    first: z.string().min(3).max(255),
    middle: z.string().min(3).max(255),
    last: z.string().min(3).max(255)
  }),
  profilePicUrl: z.string().url(),
  team: z.string()
})

export { user }

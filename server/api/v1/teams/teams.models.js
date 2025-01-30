
import { model, Schema } from "mongoose"

const teamSchema = new Schema({
  name: String,
})

const Team = new model('Team', teamSchema);

export { Team };

import { model, Schema, } from "mongoose"

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  name: {
    first: String,
    middle: String,
    last: String
  },
  profilePicUrl: String,
  team: { type: Schema.Types.Objectid, ref: "Team" }
})

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
}

const User = new model('User', userSchema);

export { User };

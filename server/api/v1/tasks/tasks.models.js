import { model, Schema } from "mongoose"

const taskchema = new Schema({
  title: String,
  description: String,
})

const Task = new model('Task', taskSchema);

export { Task };

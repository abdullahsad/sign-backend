import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
  userId: string;
  text: string;
  completed: boolean;
}

const todoSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.model<ITodo>("Todo", todoSchema);

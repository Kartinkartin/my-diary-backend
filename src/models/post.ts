import mongoose, { ObjectId } from "mongoose";

export interface IPost {
  title: string;
  text: string;
  createdAt?: Date,
  important?: boolean,
  _id: ObjectId,
}

const postSchema = new mongoose.Schema<IPost>({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 200,
  },
  text: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 2000,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  important: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<IPost>('post', postSchema);

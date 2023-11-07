import mongoose from "mongoose";

export interface IPost {
  title: string;
  text: string;
  date: Date;
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
  date: {
    type: Date,
  }
});

export default mongoose.model<IPost>('post', postSchema);

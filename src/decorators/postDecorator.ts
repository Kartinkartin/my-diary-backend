import { Types } from 'mongoose';
import { IPost } from '../models/post';

export default function postDecorator(post: IPost &{_id: Types.ObjectId}) {
  const {
    _id, title, text, date,
  } = post;
  return ({
    _id, title, text, date,
  });
}

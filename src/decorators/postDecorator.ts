import { Types } from 'mongoose';
import { IPost } from '../models/post';

export default function postDecorator(post: IPost) {
  const {
    _id, title, text, createdAt, important
  } = post;
  return ({
    _id, title, text, createdAt, important
  });
}

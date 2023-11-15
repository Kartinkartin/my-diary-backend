import { NextFunction, Request, Response } from "express";
import Post, { IPost } from "../models/post";
import postDecorator from "../decorators/postDecorator";
import DefaultError from "../errors/500-default-err";
import NotFoundError from "../errors/404-not-found-err";
import UncorrectDataError from "../errors/400-uncorrect-data";
import { ObjectId } from "mongoose";

export const getPosts = (req: Request, res: Response, next: NextFunction) => {
  Post.find({})
    .sort({ createdAt: -1 })
    .then((posts) => {
      res.send([...posts.map(postDecorator)]);
    })
    .catch(() => next(new DefaultError("Произошла ошибка")));
};

export const getPostsSortedBack = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Post.find({})
    .sort({ createdAt: 1 })
    .then((posts) => {
      res.send([...posts.map(postDecorator)]);
    })
    .catch(() => next(new DefaultError("Произошла ошибка")));
};

export const createPost = (req: Request, res: Response) => {
  Post.create({
    title: req.body.title,
    text: req.body.text,
    createdAt: req.body.date,
  })
    .then((post) => res.send(postDecorator(post)))
    .catch((err) => res.status(400).send(err));
};

export const markPost = (req: Request, res: Response) => {
  Post.findByIdAndUpdate(
    req.params.id,
    { important: req.body.important },
    { new: true }
  )
    .then((post) => res.send(postDecorator(post as IPost)))
    .catch((err) => res.status(400).send(err));
};

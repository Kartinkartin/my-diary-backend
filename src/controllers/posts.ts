import { NextFunction, Request, Response } from "express";
import Post from "../models/post";
import postDecorator from "../decorators/postDecorator";
import DefaultError from "../errors/500-default-err";
import NotFoundError from "../errors/404-not-found-err";
import UncorrectDataError from "../errors/400-uncorrect-data";

export const getPosts = (req: Request, res: Response, next: NextFunction) => {
  Post.find({}).sort({createdAt: 1})
    .then((posts) => {
      res.send([...posts.map(postDecorator)]);
    })
    .catch(() => next(new DefaultError("Произошла ошибка")));
}

export const getPostsSortedBack = (req: Request, res: Response, next: NextFunction) => {
  Post.find({}).sort({createdAt: -1})
    .then((posts) => {
      res.send([...posts.map(postDecorator)]);
    })
    .catch(() => next(new DefaultError("Произошла ошибка")));
}


export const findPost = (req: Request, res: Response, next: NextFunction) => {
  const id = String(req.params.id);
  Post.findById({ id })
    .then((post) => {
      if (!post) {
        throw new NotFoundError("Запись не найдена");
      }
      res.send({ data: postDecorator(post) });
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return next(new UncorrectDataError("Передан некорректный id"));
      }
      if (err.name === "NotFoundError") {
        return next(err);
      }
      return next(new DefaultError("Произошла ошибка"));
    });
};

export const createPost = (req: Request, res: Response) =>
  Post.create({
    title: req.body.title,
    text: req.body.text,
    createdAt: req.body.date,
  })
    .then((post) => res.send(postDecorator(post)))
    .catch((err) => res.status(400).send(err));

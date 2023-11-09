import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import postsRouter from "./routes/posts";

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/diarydb');

app.use('/posts', postsRouter);

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
})

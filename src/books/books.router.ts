import express, { Request, Response } from 'express';
import * as BookService from './book.service';
import { BaseItem, Book } from './book.interface';

export const booksRouter = express.Router();

/** Controller Definitions */

// GET BOOKS
booksRouter.get('/', async (req: Request, res: Response) => {
    try {
        const books: Book[] = await BookService.findAll();
        res.status(200).send(books);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        } else {
            res.status(500).send('Unexpected error');
        }
    }
});

// GET books/:id
booksRouter.get('/:id', async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const book: Book = await BookService.find(id);

        if (book) {
            return res.status(200).send(book);
        }

        res.status(404).send('Book not found');
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        } else {
            res.status(500).send('Unexpected error');
        }
    }
});

// POST books
booksRouter.post('/', async (req: Request, res: Response) => {
    try {
        const book: BaseItem = req.body;

        const newBook = await BookService.create(book);

        res.status(201).json(newBook);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        } else {
            res.status(500).send('Unexpected error');
        }
    }
});

// PUT book/:id
booksRouter.put('/:id', async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const bookUpdate: Book = req.body;

        const existingBook: Book = await BookService.find(id);

        if (existingBook) {
            const updatedBook = await BookService.update(id, bookUpdate);
            return res.status(200).json(updatedBook);
        }

        const newBook = await BookService.create(bookUpdate);

        res.status(201).json(newBook);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        } else {
            res.status(500).send('Unexpected error');
        }
    }
});

// DELETE book/:id
booksRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await BookService.remove(id);

        res.sendStatus(204);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        } else {
            res.status(500).send('Unexpected error');
        }
    }
});

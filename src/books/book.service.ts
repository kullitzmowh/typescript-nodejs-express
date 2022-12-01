/*Data Model */
import { BaseItem, Book } from './book.interface';
import { Books } from './books.interface';

/**
 * In-Memory Store (to store records)
 */

const items: Books = {
    1: {
        id: 1,
        name: 'Jade City',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    2: {
        id: 2,
        name: 'House of the Dragon',
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    }
};

/**Methods -  to perform operations
 *
 * All the service methods are async method, this is to simulate the asynchronous nature of read and write operations
 *
 */

//findAll returns the whole items store object
export const findAll = async (): Promise<Book[]> => Object.values(items);

//find receives an id parameter that it uses to look up and return a single store element if found
export const find = async (id: number): Promise<Book> => items[id];

//create method, it receives an object of type BaseItem as an argument, providing the required values to define a new book in the store, except the id
export const create = async (newBook: BaseItem): Promise<Book> => {
    const id = Object.keys(items).length + 1;
    items[id] = {
        id,
        ...newBook
    };
    return items[id];
};

/**update method receives the book id property and an bookUpdate object as arguments
 * Use the id to find the book in the store to update it with the properties of bookUpdate. If the store doesn't have the book, it return null
 */
export const update = async (id: number, bookUpdate: BaseItem): Promise<Book | null> => {
    const book = await find(id);

    if (!book) {
        return null;
    }

    items[id] = { id, ...bookUpdate };

    return items[id];
};

//remove method receives an id value as a parameter and uses it to look up an book in the store and to delete it if found
export const remove = async (id: number): Promise<null | void> => {
    const book = await find(id);

    if (!book) {
        return null;
    }

    delete items[id];
};

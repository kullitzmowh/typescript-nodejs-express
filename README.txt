The codes was build in Nodejs, Express and TypeScript
For simplicity, i store data in-memory and not in an external database

Created data model with interfaces to define custom types.
Created books dir under src to store all files related to the book items
To start modeling the data, i created a file to hold the definition of a BaseItem and an Book type

DIR: src/books/book.interface.ts 

DIR: src/books/books.interface.ts
-- This file will hold the definition of a Books type, a bundle of elements of type Book

Populated the src/books/books.service.ts
- this contains the data model interfaces, In-Memory store, and methods 
- Methods to perform read and write operations on the books store

The Express Controller 
- this is the endpoints to access books resource to perform read and write operations on items

DIR: src/books/books.router.ts
It contains the required the following:
- modules and interfaces
- Route definitions
- Controllers - it defines each controller function, the GET all, GET with id, POST








"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let books = [
    { title: "Zero to One", author: "Peter Thiel", yearPublish: 2014 },
    { title: "The Lean Startup", author: "Eric Ries", yearPublish: 2011 },
    { title: "Good to Great", author: "James C. Collins", yearPublish: 2001 }
];
books.forEach(book => {
    console.log(`The book '${book.title}' is written by '${book.author}' in the year '${book.yearPublish}'`);
});

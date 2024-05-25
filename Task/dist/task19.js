"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let books = [
    "Zero to One",
    "Think and grow rich",
    "Good to Great",
    "Secrate of Divine Love",
    "A hand book of spritual medicine"
];
let x = 1; // Start counting from 1
books.forEach(book => {
    console.log(`${x}. ${book}`);
    x++; // Increment the counter
});

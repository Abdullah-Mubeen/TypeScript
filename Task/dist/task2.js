"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Making the fuction to change sentence to TitleCase
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
// Variable to store the sentense
let name = "Abdullah Mubeen";
// Lower Case 
let nameLowerCase = name.toLowerCase();
// Upper Case
let nameUpperCase = name.toUpperCase();
// Tittle Case
let nameTittleCase = toTitleCase(name);
// Print 
console.log(`Lower Case ${nameLowerCase}, Upper Case ${nameUpperCase}, Tittle Case ${nameTittleCase}`);

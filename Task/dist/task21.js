"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car = "subaru";
// Test 1: Is car equal to 'subaru'? I predict True.
console.log("Is car equal to 'subaru'? I predict True");
console.log(car === "subaru");
// Test 2: Is car equal to 'honda'? I predict False.
console.log("Is car equal to 'honda'? I predict False.");
console.log(car === "honda");
// Test 3: Is car start with letter 's'? I predict True. 
console.log("Is car start with letter 's'? I predict True.");
console.log(car.startsWith('s'));
// Test 4: Is car longer than 6 character> I predict False.
console.log("Is car longer than 6 character> I predict False.");
console.log(car.length > 6);
// Test 5: Is car not 'Toyota'? I predict True.
console.log("Is car not 'Toyota'? I predict True.");
console.log(car !== "Toyota");
// Test 6: Is car lesser then or equal to 4 charachter? I predict False.
console.log("Is car lesser then or equal to 4 charachter?? I predict False.");
console.log(car.length <= 4);
// Test 7: Is car have these words 'baru'? I predict True.
console.log("Is car have these words 'baru'? I predict True.");
console.log(car.includes("baru"));
// Test 8: Is car start with 'b'? I predict False.
console.log("Is car start with 'b'? I predict False.");
console.log(car.startsWith('b'));
// Test 9: Is car end with the letter 'u'? I predict True.
console.log("Is car endwit the letter 'u'? I predict True.");
console.log(car.endsWith('u'));
// Test 10: Is car end with 'j'? I predict False.
console.log("Is car end with 'j'? I predict False");
console.log(car.endsWith('j'));
// Tests for equality and inequality with strings
let favFruit = "mango";
// Test for equality (True)
console.log(favFruit === "mango");
// Test for ineuality (False)
console.log(favFruit !== "mango");
//  Tests using the lower case function
let city = "Karachi";
// Test using lower case (True)
console.log(city.toLocaleLowerCase() === "karachi");
// Test using lower case (False)
console.log(city.toLowerCase() === "Lahore");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number = 32;
// (True)
console.log(number === 32);
// (False)
console.log(number !== 32);
// (True)
console.log(number > 22);
// (False)
console.log(number < 19);
// (True)
console.log(number >= 32);
// (False)
console.log(number <= 30);
// Tests using "and" and "or" operators
let name = "ali";
let age = 20;
// Test using "and" operator (True)
console.log(name === "ali" && age === 20);
// Test using "or" operator (False)
console.log(name === "sajid" || age === 21);
// Test whether an item is in a array or not in a array
let fruits = ['mango', 'apple', 'banana', 'grapes', 'pinaple'];
// item is in a array (True) 
console.log(fruits.includes('banana'));
// item is  not in a array
console.log(!fruits.includes('banana'));

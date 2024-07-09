"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentUsers = ["Ali", "Saad", "Asid", "Kashif", "Bilal"];
const newUsers = ["Saqib", "Ali", "Rafay", "Sayed", "Saad"];
for (const newUser of newUsers) {
    if (currentUsers.includes(newUser)) {
        console.log(`Username "${newUser}" is already taken. Please choose a different one.`);
    }
    else {
        console.log(`Username "${newUser}" is available.`);
    }
}

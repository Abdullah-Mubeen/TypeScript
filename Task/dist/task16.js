"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task12_1 = require("./task12");
console.log("I'm sorry to inform you that my new dinner table won't arrive in time. I can only invite two guests for dinner.");
// let invitedGuests = guestList.filter(guest => guest.name.includes("(R.A)"));
while (task12_1.guestList.length > 2) {
    let removedGuest = task12_1.guestList.pop();
    console.log(`${removedGuest}, I'm sorry I can't invite you to dinner.`);
}
task12_1.guestList.forEach(guest => {
    console.log(`${guest}, you're still invited to dinner.`);
});
task12_1.guestList.splice(0, task12_1.guestList.length); // This will empty the array
console.log(task12_1.guestList); // This should print an empty array: []

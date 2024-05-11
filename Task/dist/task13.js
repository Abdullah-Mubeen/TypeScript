"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiatingMessage = void 0;
const task12_1 = require("./task12"); // Import the Guests type from guests.ts
// Export the function to be used in other files
function initiatingMessage(guests) {
    guests.forEach((guest) => {
        if (guest.status === 'living') {
            console.log(`Dear ${guest.name}, we are delighted to invite you to our event.`);
        }
        else {
            console.log(`In memory of ${guest.name}, who will be missed at our event.`);
        }
    });
}
exports.initiatingMessage = initiatingMessage;
initiatingMessage(task12_1.guestList);

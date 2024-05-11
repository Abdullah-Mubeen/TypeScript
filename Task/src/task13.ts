import { Guests, guestList } from './task12'; // Import the Guests type from guests.ts

// Export the function to be used in other files
export function initiatingMessage(guests: Guests[]): void {
    guests.forEach((guest) => {
        if (guest.status === 'living') {
            console.log(`Dear ${guest.name}, we are delighted to invite you to our event.`);
        } else {
            console.log(`In memory of ${guest.name}, who will be missed at our event.`);
        }
    });
}

initiatingMessage(guestList)
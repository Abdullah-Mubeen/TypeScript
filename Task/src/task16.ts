import { guestList } from "./task12";

console.log("I'm sorry to inform you that my new dinner table won't arrive in time. I can only invite two guests for dinner.");

// let invitedGuests = guestList.filter(guest => guest.name.includes("(R.A)"));

while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`${removeGuest?.name}, I'm sorry I can't invite you to dinner.`);    
}

guestList.forEach(guests => {
    console.log(`${guests.name}, the dinner table is for you I am honoured to have you `);    
})
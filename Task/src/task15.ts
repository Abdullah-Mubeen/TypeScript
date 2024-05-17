import { Guests, guestList } from "./task12";

console.log("We found a bigger dinner table, and some new guests are coming.");

// Add the guest element at the start
guestList.unshift({ name: "Hazrat Abu Bakr(R.A)", status: "deceased" });

// Add the guest element at the middel
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, {
    name: "Hazrat Umar(R.A)",
    status: "deceased",
});

// Add the guest element at the last
guestList.push({ name: "Hazrat Usman(R.A)", status: "deceased" });

function newMessage(guestList: Guests[]) {
    guestList.forEach((guests) => {
        if (guests.status === "deceased" && guests.name.includes("(R.A)")) {
            console.log(`Dear ${guests.name}, we will do dinner together InshAllah`);
        } else if (guests.status === "deceased") {
            console.log(`${guests.name}, we are honoured to have you on the dinner`);
        } else {
            console.log(`${guests.name}, we are delighted to have you on dinner`);
        }
    });
}

newMessage(guestList);

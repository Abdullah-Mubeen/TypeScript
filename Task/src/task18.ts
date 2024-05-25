import { Guests, guestList } from "./task12";


function countGuestComing(guestList:Guests[]): number {
    return guestList.filter(guest => guest.status === "living").length;
}

const totalGuestComing = countGuestComing(guestList);

console.log(totalGuestComing);


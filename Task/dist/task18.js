"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task12_1 = require("./task12");
function countGuestComing(guestList) {
    return guestList.filter(guest => guest.status === "living").length;
}
const totalGuestComing = countGuestComing(task12_1.guestList);
console.log(totalGuestComing);

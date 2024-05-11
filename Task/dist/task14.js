"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task12_1 = require("./task12");
// The name of the guest who can't make it
const guestNotComing = task12_1.guestList[1].name;
// Announce the guest who can't make it
console.log(`Unfortunately, ${guestNotComing} can't make it to the dinner.`);
// New guest to invite
const newGuest = { name: "Dr Zia Khan", status: "living" };
// Replace the guest who can't make it with the new guest
task12_1.guestList[1] = newGuest;
// Announce the new guest
console.log(`Instead, we are delighted to invite ${newGuest.name} to the dinner.`);

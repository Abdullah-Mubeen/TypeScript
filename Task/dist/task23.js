"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task22_1 = require("./task22");
if (task22_1.color === task22_1.alien_color.Green) {
    console.log("earned 5 points for shooting the alien");
}
else if (task22_1.color == task22_1.alien_color.Yellow) {
    console.log("player just earned 10 points");
}
else if (task22_1.color === task22_1.alien_color.Red) {
    console.log("player just earned 15 points");
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color = exports.alien_color = void 0;
var alien_color;
(function (alien_color) {
    alien_color["Green"] = "green";
    alien_color["Yellow"] = "yellow";
    alien_color["Red"] = "red";
})(alien_color || (exports.alien_color = alien_color = {}));
exports.color = alien_color.Green;
if (exports.color == alien_color.Green) {
    console.log("Hoore! the player just earned 5 points");
}
else {
    // If Faile no output
}

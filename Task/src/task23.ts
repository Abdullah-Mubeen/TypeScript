import { alien_color, color } from "./task22";

if (color === alien_color.Green) {
    console.log("earned 5 points for shooting the alien");
} else if (color == alien_color.Yellow) {
    console.log("player just earned 10 points");    
} else if (color === alien_color.Red) {
    console.log("player just earned 15 points");    
}
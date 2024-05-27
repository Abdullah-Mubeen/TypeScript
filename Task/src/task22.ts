export enum alien_color {
    Green = "green",
    Yellow = "yellow",
    Red = "red"
}

export let color:alien_color = alien_color.Green;

if (color == alien_color.Green) {
    console.log("Hoore! the player just earned 5 points");    
} else {
    // If Faile no output
}


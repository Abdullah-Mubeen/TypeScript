
const placesToVisit: string[] = ["Kashmeer", "Lahore Fort", "Karakoram Highway", "Tomb of Shah Rukn-e-Alam"];

console.log(`Original order: ${placesToVisit}`);

const sortedPlaces = placesToVisit.slice().sort();
console.log(`Sorted array: ${sortedPlaces}`);

console.log(`Original order: ${placesToVisit}`);

const reversePlace = placesToVisit.slice().reverse().sort();
console.log(`Reverse array in alphhabetic order: ${reversePlace}`);

console.log(`Original order: ${placesToVisit}`);

placesToVisit.reverse();
console.log(`Reverse array: ${placesToVisit}`);

placesToVisit.reverse();
console.log(`Back to orginal order: ${placesToVisit}`);







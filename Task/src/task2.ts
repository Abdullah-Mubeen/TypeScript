// Making the fuction to change sentence to TitleCase
function toTitleCase(str: string): string {
    return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Variable to store the sentense
let name: string = "Abdullah Mubeen";

// Lower Case 
let nameLowerCase: string = name.toLowerCase()  
// Upper Case
let nameUpperCase: string = name.toUpperCase()  
// Tittle Case
let nameTittleCase: string = toTitleCase(name)

// Print 
console.log(`Lower Case ${nameLowerCase}, Upper Case ${nameUpperCase}, Tittle Case ${nameTittleCase}`);

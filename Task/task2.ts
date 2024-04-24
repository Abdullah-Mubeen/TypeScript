function toTitleCase(str: string): string {
    return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


let name: string = "Abdullah Mubeen";

let nameLowerCase: string = name.toLowerCase()  
let nameUpperCase: string = name.toUpperCase()  
let nameTittleCase: string = toTitleCase(name)

console.log(`Lower Case ${nameLowerCase}, Upper Case ${nameUpperCase}, Tittle Case ${nameTittleCase}`);

function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(' ');
}
var name = "Abdullah Mubeen";
var nameLowerCase = name.toLowerCase();
var nameUpperCase = name.toUpperCase();
var nameTittleCase = toTitleCase(name);
console.log("Lower Case ".concat(nameLowerCase, ", Upper Case ").concat(nameUpperCase, ", Tittle Case ").concat(nameTittleCase));

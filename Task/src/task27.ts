const currentUsers: string[] = ["Ali", "Saad", "Asid", "Kashif", "Bilal"];
const newUsers: string[] = ["Saqib", "Ali", "Rafay", "Sayed", "Saad"];

for (const newUser of newUsers) {
    if (currentUsers.includes(newUser)) {
        console.log(`Username "${newUser}" is already taken. Please choose a different one.`);
    } else {
        console.log(`Username "${newUser}" is available.`);
    }
}

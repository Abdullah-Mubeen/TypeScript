// Define the Guests type
export type Guests = {
    name: string,
    status: 'living' | 'deceased'
};

// Export the guest list array
export const guestList: Guests[] = [
    { name: "Zeeshan Usmani", status: "living" },
    { name: "Mojo Jojo", status: "living" },
    { name: "Dr Abdul Qadeer Khan", status: "deceased" },
];

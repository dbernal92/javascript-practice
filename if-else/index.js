// Practice Problem: Movie Tickets 
// A movie ticket costs 12 dollars.
// Children under 13 pay 8 dollars.
// Seniors 65 and older pay 6 dollars.

// Write a program that:
// Creates a variable age (hardcode it for now, e.g., let age = 20;).
// Decides the ticket price based on the age.

// Prints out a message like:
// You are 20 years old. Your ticket costs $12.

let age = 32;
let ticket = 0;

if (age < 13) {
    ticket = 8;
} else if (age >= 65) {
    ticket = 6;
} else {
    ticket = 12;
}

console.log(`You are ${age} years old. Your ticket costs ${ticket}.`)
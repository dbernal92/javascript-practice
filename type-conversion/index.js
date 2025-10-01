// Practice Problem: Type Conversion
// You’re building a simple checkout system.
// A user enters the price of an item as a string:
// let price = "49";

// A discount of 10 (as a number) should be subtracted.
// Convert price into a number so you can do the subtraction.
// Print out the final cost.

// Extra Challenge:
// Ask the user for their age as a number (for now, just hardcode it like let age = 25;).
// Convert it into a string and print:
// "You are 25 years old"

// This will give you practice with both string → number and number → string conversions.

let price;
let discount;

document.getElementById("mySubmit").onclick = function () {
    price = document.getElementById("myInput").value;
    price = Number(price);
    console.log(price);
    let newNum = document.createElement("h3");
    newNum.textContent = price;
    document.getElementById("output").appendChild(newNum);
}

document.getElementById("myDiscountSubmit").onclick = function() {
    discount = document.getElementById("myDiscount").value;
    discount = Number(discount);
    console.log(discount);
    let finalPrice = document.createElement("h3");
    let discounted;
    discounted = price - discount;
    finalPrice.textContent = discounted;
    document.getElementById("discountOutput").appendChild(finalPrice);
}
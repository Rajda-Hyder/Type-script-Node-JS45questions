"use strict";
//Question 16: More Guests: You've found a bigger dinner table,
// so there's room for more guests.
//When you have more space, you can add more guests to your list. 
//You can add guests at the beginning, middle, and end of an array.
let guestlist = ["Saba", "Ali", "Rida", "hyder"];
console.log("wao! We found a bigger table,so we are able to invite more guests.");
console.log("REVISED GUESTS INVITATIONS:");
guestlist.push("Aliya");
guestlist.splice(guestlist.length / 2, 0, "Zara");
guestlist.unshift("Asad");
console.log(guestlist);
guestlist.forEach(guest => { console.log(`Hello ${guest}, I would like to invite you at Dinner tonight.`); });

"use strict";
//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, 
//and you can only invite two guests.
// Sometimes plans change, and you'll need to adjust your guest list.
// Removing guests from your list is straightforward but should be done thoughtfully.
//use pop() method
let guestlist = ["Asad", "Saba", "Ali", "Zara", "Rida", "hyder", "Aliya"];
console.log("Bad news! bigger table is not available at time.we have space only for 2 guest.");
while (guestlist.length > 2) {
    let removedguest = guestlist.pop();
    console.log(`sorry ${removedguest},I'm not able to invite you at Dinner.`);
}
console.log(guestlist);
guestlist.forEach(guest => { console.log(`Hello ${guest} you are still invited for Dinner.`); });

//Question 15: Changing Guest List: One of your guests can't make it to the dinner,
// so you need to send out a new set of invitations with a replacement guest.

//use shift(), unshift() and forEach

//let guestlist = ["Saba","Ali","Rida","hyder"];
console.log("Bad news! Miss Saba is not able to join us because of her personal issues.");
guestlist.shift();
guestlist.unshift("Ahmed");
console.log("NEW GUEST LIST");
guestlist.forEach(guest => {console.log(`hello ${guest}, I would like to invite you at Dinner tonight.`)});


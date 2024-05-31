//Question 31: No Users: Ensure your user list isn’t empty.
// Before greeting users, check if there are any. This teaches you to handle empty arrays.

let userlist = [];
if(userlist.length === 0){
    console.log("no user found");
}
else console.log("Welcome user");
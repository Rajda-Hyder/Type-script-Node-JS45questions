//Question 32: Checking Usernames: Ensure user name is unique.
//make a list of five or more user names called current_users.
//make another list of five or more user names called new_users.with few current_user list name. 
//Use loops and conditionals to handle case-insensitive comparisons.

let current_users = ["Admin", "Ali","Zain","Rida","Hyder"];
let new_users = ["admin","zain","Saba","Hina","Rajda"];

//use .some to compare arrays.it works one by one like forEach
new_users.forEach(new_one_user => {
let our_Condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());

    if(our_Condition){
        console.log(`Sorry! This user name (${new_one_user}) is already exist.`);
}
else {console.log(`Congratulations! This user name (${new_one_user}) is available.`);
}
});

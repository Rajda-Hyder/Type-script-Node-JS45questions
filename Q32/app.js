//Question 32: Checking Usernames: Ensure user name is unique.
//make a list of five or more user names called current_users.
//make another list of five or more user names called new_users.with few current_user list name. 
//Use loops and conditionals to handle case-insensitive comparisons.
var current_users = ["Admin", "Ali", "Zain", "Rida", "Hyder"];
var new_users = ["admin", "zain", "Saba", "Hina", "Rajda"];
//use .some to compare arrays.it works one by one like forEach
new_users.forEach(function (new_one_user) {
    var our_Condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_Condition) {
        console.log("Sorry! This user name (".concat(new_one_user, ") is already exist."));
    }
    else {
        console.log("Congratulations! This user name (".concat(new_one_user, ") is available."));
    }
});

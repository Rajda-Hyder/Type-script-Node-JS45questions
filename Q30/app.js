//Question 30: Hello Admin: Greet users differently, especially 'admin'.
//Loop through usernames to personalize greetings. 
//This introduces looping and conditional logic together.
var username = ["Admin", "userA", "userB", "userC"];
username.forEach(function (username) {
    if (username === "Admin") {
        console.log("WELCOME Admin, how can I help you?");
    }
    else
        console.log("Hello ".concat(username, ", you are welcome."));
});

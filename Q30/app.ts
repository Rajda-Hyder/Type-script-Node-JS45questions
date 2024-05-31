//Question 30: Hello Admin: Greet users differently, especially 'admin'.
//Loop through usernames to personalize greetings. 
//This introduces looping and conditional logic together.

let username = ["Admin","userA","userB","userC"];

username.forEach(username => {
         if (username === "Admin"){
          console.log("WELCOME Admin, how can I help you?")
}
else console.log(`Hello ${username}, you are welcome.`);
});
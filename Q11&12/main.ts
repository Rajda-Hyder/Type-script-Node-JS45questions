//Question 12: Greetings: Use the array from Exercise 11.
// Instead of just printing each person’s name, print a message to them. 
//The message should be the same for each person,
// but personalized with their name.

//use for-of  loop
let friendsname = ["Saba","Rida","Sana","Ali","Rubab"];
for (let name of friendsname){
    console.log(`hello ${name}, how are you?`)
}
//Question 42:Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians
// by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.
let Magicians = ["Magicians1", "Magicians2", "Magicians3"];
function show_magicians(Magicians) {
    Magicians.forEach(name => console.log(name));
}
function make_great(Magicians) {
    for (let i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i] = "The Great  " + Magicians[i]);
    }
}
show_magicians(Magicians);
make_great(Magicians);
export {};

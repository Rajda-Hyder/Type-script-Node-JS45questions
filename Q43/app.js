//question 43:Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and
// store it in a separate array. Call show_magicians() with each array to show that you have
// one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(Magicians) {
    Magicians.forEach(function (name) { return console.log(name); });
}
;
function make_great(Magicians) {
    return Magicians.map(function (name) { return "The Great ".concat(name); });
}
;
var Magicians = ["Magicians1", "Magicians2", "Magicians3", "Magicians4"];
var copy_magicians = (Magicians.slice(0, 3));
var copy_great_magicians = make_great(copy_magicians);
console.log("ORIGINAL ARRAY");
console.log(show_magicians(copy_magicians));
console.log("MODIFIED ARRAY");
console.log(show_magicians(copy_great_magicians));

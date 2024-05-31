//Question 41:Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.

let Magicians = ["Magicians1","Magicians2","Magicians3"];
function show_magicians(Magicians:string[]){
    Magicians.forEach(name => console.log(name))
}
show_magicians(Magicians);
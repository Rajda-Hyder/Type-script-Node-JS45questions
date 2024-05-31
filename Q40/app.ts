//Question 40:Album: Write a function called make_album() that builds a Object describing a 
//music album. The function should take in an artist name and an album title,
// and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks
// on an album. If the calling line includes a value for the number of tracks,
// add that value to the album’s Object. Make at least one new function call that includes the 
//number of tracks on an album.

function make_album(Artist_name : string, Album_title: string,tracks?:string){
    let Album :{Artist : string, title :string, tracks?:string} = {
                  Artist : Artist_name,
                  title  : Album_title
    };
    if (tracks !== undefined){
        Album.tracks = tracks;
    }
    return Album;
    }
    let Album1= make_album("Atif Aslam","JalPari","Ab to adat si hai");
    let Album2= make_album("Rahat Fateh Ali Khan"," Back 2 Love");
    let Album3= make_album("Nusrat Fateh Ali Khan"," Mustt Mustt");
    console.log(Album1);
    console.log(Album2);
    console.log(Album3);


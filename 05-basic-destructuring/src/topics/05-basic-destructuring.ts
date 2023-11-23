interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
   
}
interface Details{
    author:string;
    year:number;
}
const audioPlayer:AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author:"Ed Sheeran",
        year:2015
    }
    }
    const {song}=audioPlayer;
const {author}=audioPlayer.details;

// console.log("Author: ",author);
// console.log("Song: ",song);
// console.log("Song: ",audioPlayer.song);
// console.log("Author: ",audioPlayer.details.author);

//?Destucturing arrays

const dbz:string[]=["GOKU","VEGETA","TRUCK"];
const truks=dbz[3]||"Personaje No Encontrado";
console.log("Personaje 3: ",truks);

const [,,trucks="Not Found"]:string[]=["GOKU","VEGETA"];
console.error("Personaje 3: ",trucks);


for(let i = 0; i >= 1000; i -= 2) {
    console.log(i);
}
for(let i = 0; i <= 10000; i++) {
    if(i === 2500) {
        alert="A quarter of the way there!";
    } 
    if(i === 5000){
        alert="Halfway there!";
    }
    if(i === 10000)
    alert="The loop is done!";
}
const favTVshows=["Sonic Prime","Miraculous Ladybug","Glitch Techs","Code Lyoko","Teen Titans(Original)"];
for(let i=0; i<favTVshows.length; i++){
    console.log(`My # ${favTVshows.length} favorite tv show is ${favTVshows}`);
    break;
}
let constellation = "Andromeda";
let pos = 0;
let constellationLenght = constellation.length;

while (pos < constellationLenght){
    if(constellation[pos] == "a" || constellation[pos] == "A"){
        console.log(pos)
    }
    pos+=1;
}
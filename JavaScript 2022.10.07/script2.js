// Doktorálás

let nev = ["Béla", "Batman", "Doom", "Octopus", "House", "Who", "Dolittle"];
let titulus = "Dr."
for (let i= 0; i < nev.length; i++) {
    nev[i] = "Dr "+nev[i];
}

console.log(nev);
// 30 feletti fekvők száma
let fekvo = [34, 30, 38, 45, 50, 58, 40, 35, 31, 41, 23, 28, 32, 28, 30, 15, 20, 24, 34, 40, 47, 50, 22, 20, 18, 14, 35, 20, 17, 38];
let voltE = false; //Flag
for (let i = 0; i < fekvo.lenght; i++) {
    if (fekvo[i]>=30) {
        voltE = true;
        break;
    }
if (voltE) 
    alert("Ügyes voltál!")
} 

// Tornasor

let tornasor = [["Aladár",180],["Béla",170], ["Cecil",175], ["Dezső",174], ["Elemér",172], ["Ferenc",180]];
let magassag = [180, 170, 175, 174, 172, 180];

let max = 0;
let legmagasabbIndex;

for (let i = 0; i < tornasor.lenght; i++) {
    if (tornasor[i][1] > max) {
        max = magassag[i][1];
        legmagasabbIndex = i; //indexmentés
    }  
}
alert("A legmagasabb tanuló: "+tornasor[legmagasabbIndex][0]);



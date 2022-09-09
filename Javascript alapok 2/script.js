//Típusok

/*

String, Number, Boolean, null, undefined

*/

//Tömb (Array of any)  ->  Array<any>

var tomb = [1, 2, 3, 4];
console.log(tomb);
console.log(tomb.length);
console.log(tomb[2]);
console.log([1,2,3][1])

console.log([[1,2], [2,3], [3,4]]);

//Objektumok

console.log(
    {
        nev: "Laci",
        age: 25,
        lakcim: {
            city: "Miskolc",
            street: "Szezám utca"
        }
    }.lakcim.street
)

console.log(
    {
        nev: "Laci",
        age: 25,
        lakcim: {
            city: "Miskolc",
            street: "Szezám utca"
        }
    }
)

//Kulcs alapú kikeresés

var data = prompt("Melyik adat legyen?");

console.log({
    nev: "Laci",
    age: 25,
    address: {
        city: "Miskolc",
        street: "Szezám utca"
    }
}[data]);


// Gyakorló feladatok

// 1. feladat

var elsoSzam = 12;
var masodikSzam = 4;
console.log(elsoSzam);
console.log(masodikSzam);
var osszeg =  elsoSzam + masodikSzam;
console.log(osszeg);

// 2. feladat

var uzenet = "Szia" + " felhasználó!";
console.log(uzenet);

// 3. feladat

var szam = 4;
var trueE = szam % 2 === 0;
console.log(trueE);
// 4. feladat

var count = 0;
var target = 5;
count++;
console.log(count > target);

// 5. feladat

var cars = ['VW', 'BMW', 'Audi'];
cars[2] = "Suzuki";
console.log(cars[1]);
console.log(cars);

// 6. feladat
var person = {
    firstName: 'József',
    lastName: 'Kovács',
    age: 25
};
console.log(person);

//---------------------------------------------------------------//

// 2-vel oszthatóság
var szam = 4;
console.log(szam % 2 == 0);

//inkrementálás

var count = 0;
var target = 5;

while (count <= target) {
    count++;
}

//tömb elem változtatás
var cars = ["WM", "BMW", "Audi"];
console.log(cars[2] = "Suzuki");

//objektum elem hozzáadás

var person = {
    firstName: "József",
    lasName: "Kovács",
}

person.age = 25;
console.log(person);

console.log("-------------Elmélet folytatása---------------")

// Elmélet ------------------------------------------------------------------------//


// Vezérlési elemek

// Elágazások, ciklusok

// Ciklusok (loop)

// while

var index = 0;
var parosSzamokSzama = 0;
var tomb = [23, 12, 1, 4, 34];
while (index < tomb.length ) {
    parosSzamokSzama += tomb[index] % 2 === 0 ? 1 : 0;
    index++;
}
console.log(parosSzamokSzama);

// for loop

var parosSzamokSzama2 = 0;
for (let i = 0; i < tomb.length; i++) {
    parosSzamokSzama += tomb[index] % 2 === 0 ? 1 : 0;
}
console.log(parosSzamokSzama2);

//for of

var parosSzamokSzama3 = 0;
for (let szam of tomb) {
    console.log(szam);
    parosSzamokSzama3 += szam % 2 === 0 ? 1 : 0;
}
console.log(parosSzamokSzama3);

var parosSzamokSzama4 = 0;
for (let szam of tomb) {
    if (szam % 2 === 0) {
        parosSzamokSzama4++;
    }
}
console.log(parosSzamokSzama4);

//  if/else

var age = prompt("Add meg a korod:");

if(age < 18) {
    console.log("Kiskorú!");
} else if (age >= 18 && age< 60) {
    console.log("Felnőtt :");
}else {
    console.log("Nyugdíjas:)");
}

// switch

switch (true) {

    case age < 18:
        console.log("Kiskorú!");
        break;
    case age > 60:
        console.log("Nyugdíjas :(");
        break;
    default:
        console.log("Felnőtt :)");

}

/* Bekérjük a felhsználótól, hogy diák/felnőtt/nyugdíjas
Diák: 300 Ft, Felnőtt: 400 Ft, Nyugdíjas: 250 Ft
Valamint hány jegyet?
10 db vásárlása esetén 10% kedvezmény.
Kiiratjuk alertel a végső árat
*/

var tipus = prompt("Milyen típusú jegyet szeretne vásárolni? (diák, felnőtt, nyugdíjas)");
var diak = 300;
var felnott = 400;
var nyugdijas = 250;

var mennyiseg = prompt("Mennyi db-ot szeretne?");

if (tipus = diak){
    alert("Összesen:"+mennyiseg*diak+" Ft");
}
if (tipus = felnőtt){
    alert("Összesen:"+mennyiseg*felnott+" Ft");
}
if (tipus = nyugdijas){
    alert("Összesen:"+mennyiseg*nyugdijas+" Ft");
}

if (mennyiseg >= 10){
    alert("Összesen:(10% kedvezmeny)"+(mennyiseg*diak)*0,10+" Ft")
}

if (mennyiseg >= 10){
    alert("Összesen:(10% kedvezmeny"+(mennyiseg*felnott)*0,10+" Ft")
}

if (mennyiseg >= 10){
    alert("Összesen:(10% kedvezmény"+(mennyiseg*nyugdijas)*0,10+" Ft")
}

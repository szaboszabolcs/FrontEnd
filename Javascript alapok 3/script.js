/* 
Függvények (function)
*/

//alprogram (subroutine)

function rantottaSutes() {
    console.log("Olaj a serpenyőbe");
    console.log("Tojás a serpenyőbe");
    console.log("Fűszerezés");
    fuszerezes();
    
}

function fuszerezes() {
    console.log("Adj hozzá sót");
    console.log("Borsot is");
}

rantottaSutes();

// Matematikai műveletek
// Input adat -> output adat
//var szam = Number (prompt("Adj meg egy számot: "))
function addOne(par) {
    return par + 1;
}

//console.log(addOne(addOne(addOne(szam))));

function addTwo(par) {
    return {
        0: 2,
        1: 3,
        2: 4,
    }[par];
}

//console.log(addTwo(szam));

//console.log(Math.floor(Math.random()*10)+1);
function randomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
//console.log(randomNumber(10,20));
let ranNum;
let i = 0;
/*do {
    ranNum = randomNumber(10,20);
    console.log(ranNum);
    i++;
    //console.log("("+i+")");
} while (ranNum != 10);
*/

/*const random = Math.floor(Math.random()*101);
let tipp = 0;
let eggNumber = 2;
alert("Találd meg az emeletet ahol éppen megreped a tojás! ")
while (random != tipp) {
    tipp = Number (prompt("Dobd ki a tojást  1 és 100 közötti emeleten: "));
    if (tipp > random) {
        eggNumber--;
        alert("Összetört! "+eggNumber+" tojásod maradt!")
        if (eggNumber == 0) {
            break;
        }
    } else if (tipp < random) {
        alert ("Nem tört össze!");
    } else if (random == tipp) {
        alert ("Megrepedt, talált!");
    }
}
alert("Vége!");

/*Adja meg a felhasználó,hogy hány jegyet kér és milyen típust (student, retired, adult). 
10-nél több jegy vásárlása esetén 10 % kedvezmény!!
*/

let quantity = Number (prompt("Hány jegyet szeretnél?"));
let type = prompt("Milyen típusú? (student, adult, retired): ");

let types = {
    student: 400,
    adult: 700,
    retired: 300
};

let price = types[type];
let totalPrice;
let discount;
if (price == undefined) {
    alert("Nem létező típust adtál meg!")
} else {
    if (quantity >= 10) {
        discount = 0.9;
    } else {
        discount = 1;
    }
    totalPrice = quantity * price * discount;
    alert("Az összár: "+totalPrice);
}
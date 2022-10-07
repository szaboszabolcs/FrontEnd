// Házi megoldás (példa)
// Címletes feladat: 2500 Ft -> 1 db 2000-es, 1 db 500-as

const bills = [ 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5 ];
let money = Number(prompt("Adj meg egy összeget:"));
function round(money) {
    if (money % 5 === 3 || money % 5 === 4) 
    return 5;
    else 
    return 0;
    
}

function pay(money) {
    index = bills.length-1;
    splits = [];

    if (money < 5) {
        splits.push(5);
        return splits;
    }

    while(money >= bills[0]) {
        if (money >= bills[index]) {
            money -= bills[index];
            splits.push(bills[index]);
        } else {
            index--;
        }
    }
    if (round(money) === 5) {
        splits.push(5);
    }
    return splits;
}

// Kiegészítés

const eredmenyek = pay(money);
console.log(eredmenyek)

let darabszam = [0,0,0,0,0,0,0,0,0,0,0,0];  // megegyezik a bills struktúrájával

let bills2 = [[5,0],[10,0], [20,0], [50,0], [100,0], [200,0], [500,0], [1000,0], [2000,0], [5000,0], [10000,0], [20000,0]];
console.log(bills2[1][0]); // tömbe ágyazott tömbök

let count;
for (let i= 0; i < bills2.length; i++) {
    count = 0;
    for(let j = 0; j< eredmenyek.length; j++) {
        if (eredmenyek[j] == bills2[i][0]) { 
            count++;
            bills2[i][1] = count;
        }
    }
        if (count != 0) {
            console.log(bills2[i][0]+"-s címletből "+bills2[i][1]+" db kell")
        }
}

console.log(bills2);

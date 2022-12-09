// Set -> egyedi értékek gyűjteménye

const letters = new Set(["a" , "b" , "c"])
console.log(letters.size);

letters.add("d");
console.log(letters);
console.log(letters.has("d"));

let text = "";
letters.forEach(function(value) {
    text += value;
})

console.log(text);

text = "";
for (let x of letters.values()) {
    text += x;
}

console.log(text);

// Map -> kulcs-érték párok [[kulcs,érték],[kulcs2,érték2]]

const fruits = new Map ([
    ["apples", 500],
    ["bananas", 600],
    ["oranges", 700]
])


console.log(fruits);
console.log(fruits.set("apples", 400));
console.log(fruits.get("apples"));


text = "";
fruits.forEach(function(value) {
    text += value;
})
console.log(text);

text = "";
for (let x of fruits.entries()) {
    text += x + " ";
}
console.log(text);

// Array destructuring -> tömbelemek változóba

let a, b, rest, c, d;
[a,b] = [10, 20];
console.log(a + " " + b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a + " " + b + " " + rest);


// Arrow function 

/*let addOne = function(num) {
    return num+1;
}
*/

let addOne = num => num+1;
console.log(addOne(4));

/*() => {
    alert
}
fetch("url").then(response => response.json())
*/

let rest2 = rest.map(num => num/2);
console.log(rest2);

// Try/catch -> Hibakezelés

console.log("----------")
function elsoFuggveny() {
    console.log(1);

    if(true) {
        throw new Error("Hiba");
    }
    masodikFuggveny();
    console.log(2);
}

function masodikFuggveny() {
    console.log(3);
    setTimeout(function() {
        console.log(4);
    },0);
    console.log(5);
}

console.log(6);
try {
    elsoFuggveny();
} catch (error) {
    console.log("Hiba oka:" + error)
}
console.log(7);
// 6, 1, 3, 5, 2, 7, 4